<script lang="ts">
	import { enhance } from '$app/forms'
	import aircuityLogo from '$lib/assets/aircuity_logo.webp'
	import i2slLogo from '$lib/assets/i2sl-logo.webp'
	import siemensLogo from '$lib/assets/siemens-logo.webp'
	import { sharedEmail } from '$lib/stores/email'
	import { uiStore } from '$lib/stores/ui.store.svelte'
	import type { SubmitFunction } from '@sveltejs/kit'

	let isSubmitting = $state(false)
	let showThankYou = $state(false)
	let formError = $state('')

	let fullName = $state('')
	let contactInfo = $state('')
	let message = $state('')

	function closeContactPanel() {
		uiStore.isContactPanelOpen = false
		// Only restore body overflow if no other panels are open
		if (!uiStore.isInHouseDrivePanelOpen) {
			document.body.style.overflow = ''
		}
		// Reset form state
		setTimeout(() => {
			showThankYou = false
			fullName = ''
			contactInfo = ''
			message = ''
			formError = ''
			sharedEmail.set('')
		}, 500)
	}

	// Form submission handler using SvelteKit's enhance
	const handleSubmit: SubmitFunction = () => {
		isSubmitting = true
		formError = ''

		return async ({ result }) => {
			isSubmitting = false

			if (result.type === 'success') {
				showThankYou = true
				setTimeout(() => closeContactPanel(), 2500)
			}
			else if (result.type === 'failure') {
				formError = result.data?.error || 'Something went wrong. Please try again.'
			}
		}
	}

	// Handle Escape key to close panel
	$effect(() => {
		function handleKeydown(event: KeyboardEvent) {
			if (event.key === 'Escape' && uiStore.isContactPanelOpen) {
				closeContactPanel()
			}
		}

		if (uiStore.isContactPanelOpen) {
			document.addEventListener('keydown', handleKeydown)
		}

		return () => {
			document.removeEventListener('keydown', handleKeydown)
		}
	})

</script>

<div class="fixed inset-y-0 right-0 z-[10001] w-full max-w-5xl bg-white shadow-xl transform transition-transform duration-500 ease-in-out overflow-y-auto {uiStore.isContactPanelOpen ? 'translate-x-0' : 'translate-x-full'}">
	<div class="relative h-full flex flex-col">
		<div class="absolute top-0 right-0 pt-6 pr-6">
			<button
				aria-label="Close panel"
				onclick={closeContactPanel}
				class="text-gray-500 hover:text-gray-800 transition-colors"
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
			<div class="hidden md:flex bg-gray-50 p-8 md:p-12 flex-col justify-center">
				<div>
					<h3 class="text-3xl font-bold text-gray-900 mb-6">
						What happens next?
					</h3>
					<div class="space-y-6">
						<div>
							<h4 class="text-xl font-bold text-gray-800" id="contact">
								Introduction Call
							</h4>
							<p class="text-lg text-gray-600 mt-2">
								We hold a structured, two-way conversation to understand
								your vision, challenges, and goals. We'll provide a
								transparent overview of our process, ensuring we both have a
								confident decision on our fit as partners.
							</p>
						</div>
						<div class="pt-4 border-t border-gray-200">
							<p class="text-sm text-gray-500">
								A member of our team will reach out to schedule your call.
							</p>
						</div>
					</div>
					<div class="mt-12 pt-8">
						<div class="flex items-center justify-around gap-x-8">
							<img
								src={siemensLogo}
								alt="Siemens Logo"
								class="h-6 w-auto object-contain filter grayscale opacity-60"
							/>
							<img
								src={i2slLogo}
								alt="I2SL Logo"
								class="h-6 w-auto object-contain filter grayscale opacity-60"
							/>
							<img
								src={aircuityLogo}
								alt="Aircuity Logo"
								class="h-6 w-auto object-contain filter grayscale opacity-60"
							/>
						</div>
					</div>
				</div>
			</div>
			<div class="bg-white p-8 md:p-12 flex flex-col justify-center">
				{#if !showThankYou}
					<div>
						<h2 class="text-3xl font-bold text-gray-900 mb-2">
							Think we can help?
						</h2>
						<p class="text-xl text-gray-600 mb-8">
							Share the challenge you're facing or the outcome you're aiming
							for, and let's get started.
						</p>
					</div>

					<form
						method="POST"
						action="?/sendGoogleChatMessage"
						aria-label="Contact form"
						use:enhance={handleSubmit}
					>
						{#if formError}
							<div class="mb-6 p-4 bg-red-50 border border-red-200 rounded-lg">
								<p class="text-red-700 text-sm">{formError}</p>
							</div>
						{/if}
						<!--
						{#if showLinkWarning}
							<div class="mb-6 p-4 bg-yellow-50 border border-yellow-200 rounded-lg">
								<p class="text-yellow-700 text-sm">
									Please note: Links, emails, and contact information in messages may be removed for security purposes.
								</p>
							</div>
						{/if} -->

						<div class="space-y-6">
							<div>
								<label
									for="full-name"
									class="block text-sm font-medium text-gray-700"
								>Full Name</label>
								<input
									type="text"
									name="fullName"
									id="full-name"
									autocomplete="name"
									bind:value={fullName}
									class="mt-1 block w-full px-4 py-3 bg-white border border-gray-300 text-gray-900 rounded-lg shadow-sm focus:ring-black focus:border-black text-lg"
								/>
							</div>
							<div>
								<label
									for="contact-info"
									class="block text-sm font-medium text-gray-700"
								>Email or Phone Number</label>
								<input
									type="text"
									name="contactInfo"
									id="contact-info"
									bind:value={contactInfo}
									class="mt-1 block w-full px-4 py-3 bg-white border border-gray-300 text-gray-900 rounded-lg shadow-sm focus:ring-black focus:border-black text-lg"
								/>
							</div>
							<div>
								<label
									for="message"
									class="block text-sm font-medium text-gray-700"
								>What do you want to build?</label>
								<textarea
									id="message"
									name="message"
									rows="4"
									bind:value={message}
									class="mt-1 block w-full px-4 py-3 bg-white border border-gray-300 text-gray-900 rounded-lg shadow-sm focus:ring-black focus:border-black text-lg"
								></textarea>
							</div>
						</div>
						<div class="mt-8">
							<button
								type="submit"
								disabled={isSubmitting}
								class="w-full text-white font-semibold px-10 py-4 text-lg sm:px-20 sm:py-5 sm-text-xl bg-black hover:opacity-90 ease-in-out duration-300 inline-block rounded-lg disabled:opacity-50 disabled:cursor-not-allowed"
							>
								{#if isSubmitting}
									<svg
										class="animate-spin -ml-1 mr-3 h-5 w-5 text-white inline"
										xmlns="http://www.w3.org/2000/svg"
										fill="none"
										viewBox="0 0 24 24"
									>
										<circle
											class="opacity-25"
											cx="12"
											cy="12"
											r="10"
											stroke="currentColor"
											stroke-width="4"
										></circle>
										<path
											class="opacity-75"
											fill="currentColor"
											d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"
										></path>
									</svg>
									Sending...
								{:else}
									Send Message
								{/if}
							</button>
						</div>
					</form>
				{:else}
					<div class="text-center h-full flex flex-col justify-center">
						<h2 class="text-3xl font-bold text-gray-900 mb-4">Thank You!</h2>
						<p class="text-xl text-gray-600">
							We've received your message and will be in touch shortly.
						</p>
					</div>
				{/if}
			</div>
		</div>
	</div>
</div>
<div
	role="button"
	tabindex="0"
	aria-label="Close contact panel"
	class="fixed inset-0 z-[10000] bg-black transition-opacity duration-500 ease-in-out {uiStore.isContactPanelOpen ? 'opacity-75' : 'opacity-0 hidden'}"
	onkeydown={(e) => {
		if (e.key === 'Enter' || e.key === ' ') {
			e.preventDefault()
			closeContactPanel()
		}
	}}
></div>
