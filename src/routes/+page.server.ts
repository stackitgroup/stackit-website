import { fail, type Actions } from '@sveltejs/kit'
import { z } from 'zod'

// Schema para validar contactInfo como email o teléfono
const contactInfoSchema = z.string()
	.min(1, 'Email or phone number is required.')
	.refine((value) => {
		// Validar si es email válido
		const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/
		// Validar si es teléfono válido (números, espacios, guiones, paréntesis, +)
		const phoneRegex = /^[\d\s\-()+]{8,}$/

		return emailRegex.test(value) || phoneRegex.test(value)
	}, 'Must be a valid email address or phone number.')

const contactFormSchema = z.object({
	fullName: z.string()
		.min(1, 'Full name is required.')
		.min(8, 'Full name must be at least 8 characters long.'),
	contactInfo: contactInfoSchema,
	message: z.string()
		.min(1, 'Message is required.')
		.min(8, 'Message must be at least 8 characters long.')
})

export const actions: Actions = {
	sendGoogleChatMessage: async ({ request }) => {
		const data = await request.formData()

		const formData = {
			fullName: data.get('fullName')?.toString()?.trim() ?? '',
			contactInfo: data.get('contactInfo')?.toString()?.trim() ?? '',
			message: data.get('message')?.toString()?.trim() ?? ''
		}

		// Validación con Zod
		const validation = contactFormSchema.safeParse(formData)

		if (!validation.success) {
			const errors = validation.error.issues
			// Tomar el primer error para mostrar
			const firstError = errors[0]

			return fail(400, {
				error: firstError.message,
				...formData
			})
		}

		const { fullName, contactInfo, message } = validation.data

		try {
			// Aquí iría la lógica para enviar el mensaje a Google Chat
			// Por ejemplo, llamar a una API interna o externa
			const response = await fetch('/api/messages', {
				method: 'POST',
				headers: {
					'Content-Type': 'application/json'
				},
				body: JSON.stringify({
					fullName,
					contactInfo,
					message
				})
			})

			if (!response.ok) {
				const errorData = await response.json().catch(() => ({}))
				return fail(response.status, {
					error: errorData.message || 'Failed to send message.',
					fullName,
					contactInfo,
					message
				})
			}

			// Éxito - devolver datos sin error
			return {
				success: true,
				message: 'Message sent successfully!'
			}
		}
		catch (err) {
			console.error('Error sending message:', err)
			return fail(500, {
				error: 'Network error. Please try again.',
				fullName,
				contactInfo,
				message
			})
		}
	}
}
