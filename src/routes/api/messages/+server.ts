import { SECRET_GOOGLE_CHAT_WEBHOOK_URL } from '$env/static/private'
import { json, type RequestHandler } from '@sveltejs/kit'

export const POST: RequestHandler = async ({ request, fetch }) => {
	try {
		const { fullName, contactInfo, message } = await request.json()

		if (!fullName || !fullName.trim()) {
			return json({ message: 'Full name is required.' }, { status: 400 })
		}

		if (!contactInfo || !contactInfo.trim()) {
			return json({ message: 'Email or phone number is required.' }, { status: 400 })
		}

		if (!message || !message.trim()) {
			return json({ message: 'Message cannot be empty.' }, { status: 400 })
		}

		const formattedMessage = `*New Contact Form Submission*

*Name:* ${fullName.trim()}
*Contact:* ${contactInfo.trim()}

*Message:*
${message.trim()}

---
Received at: ${new Date().toLocaleString()}`

		const response = await fetch(SECRET_GOOGLE_CHAT_WEBHOOK_URL, {
			method: 'POST',
			headers: {
				'Content-Type': 'application/json; charset=UTF-8'
			},
			body: JSON.stringify({
				text: formattedMessage
			})
		})

		if (!response.ok) {
			// If Google Chat returns an error
			console.error('Google Chat error:', await response.text())
			return json({ message: 'Could not send message to Google Chat.' }, { status: 500 })
		}

		return json({ message: 'Message sent successfully.' })
	}
	catch (err) {
		console.error('Server error:', err)
		return json({ message: 'Internal server error.' }, { status: 500 })
	}
}
