import { fail, type Actions } from '@sveltejs/kit'
import { ENVIRONMENT, SECRET_GOOGLE_CHAT_WEBHOOK_URL } from '$env/static/private'
import { z } from 'zod'
import dayjs from 'dayjs'
import utc from 'dayjs/plugin/utc'
import timezone from 'dayjs/plugin/timezone'

// Configurar plugins de DayJS
dayjs.extend(utc)
dayjs.extend(timezone)

function sanitizeMessage(message: string): string {
	if (!message) return message

	// PROTECCIÓN CONTRA XSS Y HTML
	// Remover todas las etiquetas HTML (incluyendo scripts, enlaces, etc)
	let sanitized = message.replace(/<[^>]*>/gi, '[HTML tag removed]')

	// Remover contenido JavaScript específico
	sanitized = sanitized.replace(/javascript:/gi, '[JavaScript removed]')
	sanitized = sanitized.replace(/on\w+\s*=/gi, '[Event handler removed]')

	// Remover entidades HTML que podrían ser usadas para bypass
	sanitized = sanitized.replace(/&[#a-zA-Z0-9]+;/gi, '[HTML entity removed]')

	// Remover data: URIs que podrían contener código
	sanitized = sanitized.replace(/data:\s*[^;]+;/gi, '[Data URI removed]')

	// PROTECCIÓN CONTRA LINKS Y CONTACTO
	// Remover URLs completas (http, https, ftp, www)
	sanitized = sanitized.replace(/(https?:\/\/[^\s]+)/gi, '[URL removed]')
	sanitized = sanitized.replace(/(www\.[^\s]+)/gi, '[URL removed]')
	sanitized = sanitized.replace(/(ftp:\/\/[^\s]+)/gi, '[URL removed]')

	// Remover patrones de dominios comunes (.com, .org, etc)
	sanitized = sanitized.replace(/([a-zA-Z0-9-]+\.(com|org|net|edu|gov|io|co|uk|es|mx|ar|cl|pe|co\.uk|com\.mx|es\.com|org\.ar))/gi, '[Domain removed]')

	// Remover emails
	sanitized = sanitized.replace(/([a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,})/gi, '[Email removed]')

	// Remover patrones de teléfonos con links tel:
	sanitized = sanitized.replace(/(tel:[^\s]+)/gi, '[Phone removed]')

	// Remover menciones de redes sociales
	sanitized = sanitized.replace(/(@[a-zA-Z0-9_]+)/g, '[Mention removed]')

	// Remover hashtags que podrían ser links
	sanitized = sanitized.replace(/(#[a-zA-Z0-9_]+)/g, '[Hashtag removed]')

	// LIMPIEZA FINAL
	// Remover múltiples espacios y saltos de línea excesivos
	sanitized = sanitized.replace(/\s+/g, ' ')

	return sanitized.trim()
}

const contactFormSchema = z.object({
	fullName: z.string(),
	contactInfo: z.string(),
	message: z.string().transform(sanitizeMessage)
})

export const actions: Actions = {
	sendGoogleChatMessage: async ({ request }) => {
		const data = await request.formData()

		const formData = {
			fullName: data.get('fullName')?.toString()?.trim() ?? '',
			contactInfo: data.get('contactInfo')?.toString()?.trim() ?? '',
			message: data.get('message')?.toString()?.trim() ?? ''
		}

		const validation = contactFormSchema.safeParse(formData)

		if (!validation.success) {
			const errors = validation.error.issues
			const firstError = errors[0]

			return fail(400, {
				error: firstError.message,
				...formData
			})
		}

		const { fullName, contactInfo, message } = validation.data

		try {
			// Construir el mensaje para Google Chat
			const pstDate = dayjs().tz('America/Los_Angeles')
			const formattedDate = `${pstDate.format('MMMM DD, YYYY')} at ${pstDate.format('h:mm A')} PST`

			const chatMessage = {
				text: `New contact form submission:
        
*Name:* ${fullName}
*Contact:* ${contactInfo}

*Message:* ${message}

*Environment:* ${ENVIRONMENT}
*Sent at:* ${formattedDate}
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
