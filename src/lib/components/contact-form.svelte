<script lang="ts">
	import { enhance } from '$app/forms';
	import { sharedEmail } from '$lib/stores/email';
	import type { SubmitFunction } from '@sveltejs/kit';
	import { onMount } from 'svelte';
	import { toast } from 'svelte-sonner';

	let isSubmitting = $state(false)
	let message = $state('')
	let showLinkWarning = $state(false)

	// Función para detectar links en el mensaje
	function containsLinks(text: string): boolean {
		if (!text) return false

		const linkPatterns = [
			/(https?:\/\/[^\s]+)/i, // URLs con protocolo
			/(www\.[^\s]+)/i, // URLs con www
			/([a-zA-Z0-9-]+\.(com|org|net|edu|gov|io|co|uk|es|mx|ar|cl|pe|co\.uk|com\.mx))/i, // Dominios
			/([a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,})/i, // Emails
			/(tel:[^\s]+)/i // Links de teléfono
		]

		return linkPatterns.some(pattern => pattern.test(text))
	}

	// Reaccionar a cambios en el mensaje
	$effect(() => {
		showLinkWarning = containsLinks(message)
	})

	const handleSubmit: SubmitFunction = () => {
		isSubmitting = true

		return async ({ result, formElement }) => {
			isSubmitting = false

			if (result.type === 'success' && result.data?.success) {
				toast.success(result.data.message || 'Message sent successfully!')
				formElement.reset()
			}
			else if (result.type === 'failure' && result.data?.error) {
				toast.error(result.data.error)
			}
			else {
				toast.error('Something went wrong. Please try again.')
			}
		}
	}

	onMount(() => {
		// Contact Panel Logic
		const contactPanel = document.getElementById('contact-panel')
		const overlay = document.getElementById('overlay')
		const closeBtn = document.getElementById('close-panel-btn')
		const openTriggers = document.querySelectorAll('a[href="#contact"]')
		const form = document.querySelector<HTMLFormElement>('form[aria-label="Contact form"]')

		function openPanel() {
			if (!overlay || !contactPanel) return
			overlay.classList.remove('hidden')
			contactPanel.classList.remove('hidden')
			document.body.style.overflow = 'hidden'

			requestAnimationFrame(() => {
				overlay.classList.add('opacity-50')
				contactPanel.classList.remove('translate-x-full')
			})
		}

		function closePanel() {
			if (!overlay || !contactPanel) return
			overlay.classList.remove('opacity-50')
			contactPanel.classList.add('translate-x-full')

			setTimeout(() => {
				overlay.classList.add('hidden')
				contactPanel.classList.add('hidden')
				document.body.style.overflow = ''

				// Reset the contact form and clear shared email when panel closes
				form?.reset()
				sharedEmail.set('')
			}, 500)
		}

		openTriggers.forEach((trigger) => {
			trigger.addEventListener('click', (e) => {
				e.preventDefault()
				openPanel()
			})
		})

		if (closeBtn) closeBtn.addEventListener('click', closePanel)
		if (overlay) overlay.addEventListener('click', closePanel)

		return () => {
			document.body.style.overflow = ''
			// remove listeners
			openTriggers.forEach((trigger) => {
				trigger.removeEventListener('click', openPanel)
			})
			if (closeBtn) closeBtn.removeEventListener('click', closePanel)
			if (overlay) overlay.removeEventListener('click', closePanel)
		}
	})
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
			<div class="bg-[#050e36b9] p-8 md:p-12 flex flex-col justify-center">
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
				<form
					method="POST"
					action="?/sendGoogleChatMessage"
					use:enhance={handleSubmit}
					aria-label="Contact form"
					novalidate
				>
					<div class="space-y-6">
						<div>
							<label
								for="full-name"
								class="block text-sm font-medium text-gray-400"
							>Full Name</label
							>
							<input
								type="text"
								name="fullName"
								id="full-name"
								autocomplete="name"
								class="mt-1 block w-full px-4 py-3 bg-transparent border border-[#99c5fe79]  text-white rounded-lg shadow-sm focus:ring-[#3F5FDD] focus:border-[#3F5FDD] text-lg focus:outline-none focus:ring-2"
								disabled={isSubmitting}
								required
							/>
						</div>
						<div>
							<label
								for="contact-info"
								class="block text-sm font-medium text-gray-400"
							>Email</label>
							<input
								type="email"
								name="contactInfo"
								id="contact-info"
								class="mt-1 block w-full px-4 py-3 bg-transparent border border-[#99c5fe79]  text-white rounded-lg shadow-sm focus:ring-[#3F5FDD] focus:border-[#3F5FDD] text-lg focus:outline-none focus:ring-2"
								bind:value={$sharedEmail}
								disabled={isSubmitting}
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
								class="mt-1 block w-full px-4 py-3 bg-transparent border border-[#99c5fe79] text-white rounded-lg shadow-sm focus:ring-[#3F5FDD] focus:border-[#3F5FDD] text-lg focus:outline-none focus:ring-2"
								disabled={isSubmitting}
								required
							></textarea>
						</div>
					</div>
					<div class="mt-8">
						<button
							type="submit"
							disabled={isSubmitting}
							class="w-full border-2 border-white text-black font-semibold px-10 py-4 text-lg sm:px-20 sm:py-5 sm:text-xl bg-white ease-in-out duration-300 inline-block rounded-2xl hover:opacity-80 opacity-100"
						>
							{#if isSubmitting}
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
