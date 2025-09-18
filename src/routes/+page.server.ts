import { fail, type Actions } from '@sveltejs/kit'
import { ENVIRONMENT, SECRET_GOOGLE_CHAT_WEBHOOK_URL } from '$env/static/private'
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
			// Construir el mensaje para Google Chat
			const chatMessage = {
				text: `New contact form submission:
        
*Name:* ${fullName}
*Contact:* ${contactInfo}

*Message:* ${message}

*Environment:* ${ENVIRONMENT}
*Sent at:* ${new Date().toISOString()}
`
			}

			// Enviar directamente al webhook de Google Chat

			if (!SECRET_GOOGLE_CHAT_WEBHOOK_URL) {
				console.error('Google Chat webhook URL not configured')
				return fail(500, {
					error: 'Server configuration error. Please try again later.',
					fullName,
					contactInfo,
					message
				})
			}

			const response = await fetch(SECRET_GOOGLE_CHAT_WEBHOOK_URL, {
				method: 'POST',
				headers: {
					'Content-Type': 'application/json'
				},
				body: JSON.stringify(chatMessage)
			})

			if (!response.ok) {
				console.error('Google Chat webhook error:', response.status, response.statusText)
				return fail(response.status, {
					error: 'Failed to send message. Please try again.',
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
