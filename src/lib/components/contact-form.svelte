<script lang="ts">
	import { toast } from 'sonner'

	let fullName = $state('')
	let contactInfo = $state('')
	let message = $state('')
	let isLoading = $state(false)

	async function handleSubmit(event: Event) {
		event.preventDefault()

		if (!fullName.trim()) {
			toast.error('Full name is required.')
			return
		}

		if (!contactInfo.trim()) {
			toast.error('Email or phone number is required.')
			return
		}

		if (!message.trim()) {
			toast.error('Message cannot be empty.')
			return
		}

		isLoading = true

		try {
			const response = await fetch('/api/messages', {
				method: 'POST',
				headers: {
					'Content-Type': 'application/json'
				},
				body: JSON.stringify({
					fullName: fullName.trim(),
					contactInfo: contactInfo.trim(),
					message: message.trim()
				})
			})

			const data = await response.json()

			if (response.ok) {
				toast.success(data.message || 'Message sent successfully!')
				// Reset form
				fullName = ''
				contactInfo = ''
				message = ''
			}
			else {
				toast.error(data.message || 'Failed to send message.')
			}
		}
		catch (err) {
			console.error('Network error:', err)
			toast.error('Network error. Please try again.')
		}
		finally {
			isLoading = false
		}
	}
</script>

<div
	id="contact-panel"
	class="fixed inset-y-0 right-0 z-[9999] w-full max-w-5xl bg-[#181818] shadow-xl transform translate-x-full transition-transform duration-500 ease-in-out hidden overflow-y-auto"
>
	<div class="relative h-full flex flex-col">
		<div class="absolute top-0 right-0 pt-6 pr-6">
			<button
				aria-label="Close panel"
				id="close-panel-btn"
				class="text-gray-400 hover:text-white transition-colors"
			>
				<svg
					class="w-8 h-8"
					fill="none"
					stroke="currentColor"
					viewBox="0 0 24 24"
					xmlns="http://www.w3.org/2000/svg"
				>
					<path
						stroke-linecap="round"
						stroke-linejoin="round"
						stroke-width="2"
						d="M6 18L18 6M6 6l12 12"
					></path>
				</svg>
			</button>
		</div>
		<div class="flex-grow grid grid-cols-1 md:grid-cols-2">
			<div class="bg-[#0A1A62] p-8 md:p-12 flex flex-col justify-center">
				<h3 class="text-3xl font-bold text-white mb-6">
					What happens next?
				</h3>
				<div class="space-y-6">
					<div>
						<h4 class="text-xl font-bold text-white" id="contact">
							1. Introduction Call
						</h4>
						<p class="text-lg text-gray-300 mt-2">
							We hold a structured, two-way conversation to understand your
							vision, challenges, and goals. We'll provide a transparent
							overview of our process, ensuring we both have a confident
							decision on our fit as partners.
						</p>
					</div>
					<div class="pt-4 border-t border-gray-700">
						<p class="text-sm text-gray-500">
							A member of our team will reach out within one business day to
							schedule your call.
						</p>
					</div>
				</div>
			</div>

			<div class="bg-[#181818] p-8 md:p-12 flex flex-col justify-center">
				<h2 class="text-3xl font-bold text-white mb-2">
					Think we can help?
				</h2>
				<p class="text-xl text-gray-400 mb-8">
					Share the challenge you’re facing or the outcome you’re aiming
					for, and let’s get started.
				</p>
				<form onsubmit={handleSubmit} action="#" method="POST">
					<div class="space-y-6">
						<div>
							<label
								for="full-name"
								class="block text-sm font-medium text-gray-400"
							>Full Name</label
							>
							<input
								type="text"
								name="full-name"
								id="full-name"
								autocomplete="name"
								bind:value={fullName}
								class="mt-1 block w-full px-4 py-3 bg-gray-900 border border-gray-700 text-white rounded-lg shadow-sm focus:ring-[#3F5FDD] focus:border-[#3F5FDD] text-lg"
								disabled={isLoading}
								required
							/>
						</div>
						<div>
							<label
								for="contact-info"
								class="block text-sm font-medium text-gray-400"
							>Email or Phone Number</label
							>
							<input
								type="text"
								name="contact-info"
								id="contact-info"
								bind:value={contactInfo}
								class="mt-1 block w-full px-4 py-3 bg-gray-900 border border-gray-700 text-white rounded-lg shadow-sm focus:ring-[#3F5FDD] focus:border-[#3F5FDD] text-lg"
								disabled={isLoading}
								required
							/>
						</div>
						<div>
							<label
								for="message"
								class="block text-sm font-medium text-gray-400"
							>What do you want to build?</label
							>
							<textarea
								id="message"
								name="message"
								rows="4"
								bind:value={message}
								class="mt-1 block w-full px-4 py-3 bg-gray-900 border border-gray-700 text-white rounded-lg shadow-sm focus:ring-[#3F5FDD] focus:border-[#3F5FDD] text-lg"
								disabled={isLoading}
								required
							></textarea>
						</div>
					</div>
					<div class="mt-8">
						<button
							type="submit"
							disabled={isLoading || !fullName.trim() || !contactInfo.trim() || !message.trim()}
							class="w-full bg-[#3F5FDD] text-white font-semibold px-24 py-6 hover:bg-[#3550B8] transition-colors duration-300 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-[#3F5FDD] text-xl inline-block rounded-2xl disabled:opacity-50 disabled:cursor-not-allowed"
						>
							{#if isLoading}
								Sending...
							{:else}
								Send
							{/if}
						</button>
					</div>
				</form>
			</div>
		</div>
	</div>
</div>

<div
	id="overlay"
	class="fixed inset-0 z-[9998] bg-[#181818] opacity-0 hidden transition-opacity duration-500 ease-in-out"
></div>
