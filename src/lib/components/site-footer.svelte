<script>
	import StackitLogoWhiteWhite from '$lib/assets/stackit-logo-white-white.webp'
	import { sharedEmail } from '$lib/stores/email'

</script>

<footer class="bg-black text-gray-300 min-h-screen flex items-center">
	<div class="container mx-auto px-6 py-24">
		<div class="grid grid-cols-1 md:grid-cols-10 gap-16">
			<div class="md:col-span-7">
				<a href="index.html" class="inline-block mb-6">
					<img
						src={StackitLogoWhiteWhite}
						alt="Stackit Logo"
						class="h-6 w-auto"
					/>
				</a>
				<div class="text-gray-300 text-base mb-12">
					<p>
						Stackit is a software development agency. With a specialty in
						business systems, SaaS, and critical application design, we're
						the preferred partner for companies that want to build
						extraordinary software with a team that shares their standards.
						We provide a true software development partnership, built on a
						culture of deep collaboration and rigorous engineering
						discipline. We give you the confidence of a great in-house team,
						freeing you to innovate at speed.
					</p>
					<p class="mt-4 font-semibold text-gray-300">San Diego, CA</p>
				</div>
				<h2 class="text-2xl font-bold text-white mb-4">
					Insights for your inbox
				</h2>
				<form class="flex">
					<input
						id="newsletter-email"
						name="email"
						type="email"
						placeholder="Enter your email"
						bind:value={$sharedEmail}
						class="w-full px-4 py-3 bg-gray-900 text-white border border-gray-700 rounded-l-lg focus:outline-none focus:ring-2 focus:ring-[#2F5CEC]"
						required
					/>
					<button
						aria-label="Subscribe to newsletter"
						type="submit"
						class="bg-[#2F5CEC] text-white font-semibold px-6 py-3 rounded-r-lg hover:bg-[#234baf] transition-colors"
					>
						<svg
							class="w-6 h-6"
							fill="none"
							stroke="currentColor"
							viewBox="0 0 24 24"
							xmlns="http://www.w3.org/2000/svg"
						>
							<path
								stroke-linecap="round"
								stroke-linejoin="round"
								stroke-width="2"
								d="M14 5l7 7m0 0l-7 7m7-7H3"
							></path>
						</svg>
					</button>
				</form>
			</div>

			<div class="md:col-span-3 flex flex-col items-start">
				<div class="text-left w-full">
					<h2 class="text-2xl font-bold text-white mb-6">Get In Touch</h2>
					<div class="space-y-4 text-base text-gray-300">
						<p class="flex items-center">
							<svg
								xmlns="http://www.w3.org/2000/svg"
								class="h-5 w-5 mr-3 text-gray-500"
								fill="none"
								viewBox="0 0 24 24"
								stroke="currentColor"
								stroke-width="2"
							>
								<path
									stroke-linecap="round"
									stroke-linejoin="round"
									d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z"
								/>
							</svg>
							<a
								href="mailto:hello@stackitgroup.com"
								class="hover:text-white transition-colors"
							>hello@stackitgroup.com</a
							>
						</p>
						<p class="flex items-center">
							<svg
								xmlns="http://www.w3.org/2000/svg"
								class="h-5 w-5 mr-3 text-gray-500"
								fill="none"
								viewBox="0 0 24 24"
								stroke="currentColor"
								stroke-width="2"
							>
								<path
									stroke-linecap="round"
									stroke-linejoin="round"
									d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z"
								/>
							</svg>
							<a
								href="tel:+16199175387"
								class="hover:text-white transition-colors"
							>+1 (619) 917-5387</a
							>
						</p>
						<div class="flex items-center">
							<svg
								xmlns="http://www.w3.org/2000/svg"
								class="h-5 w-5 mr-3 text-gray-500"
								fill="currentColor"
								viewBox="0 0 24 24"
							>
								<path d="M19 0h-14c-2.761 0-5 2.239-5 5v14c0 2.761 2.239 5 5 5h14c2.762 0 5-2.239 5-5v-14c0-2.761-2.238-5-5-5zm-11 19h-3v-11h3v11zm-1.5-12.268c-.966 0-1.75-.79-1.75-1.764s.784-1.764 1.75-1.764 1.75.79 1.75 1.764-.783 1.764-1.75 1.764zm13.5 12.268h-3v-5.604c0-3.368-4-3.113-4 0v5.604h-3v-11h3v1.765c1.396-2.586 7-2.777 7 2.476v6.759z"
								/>
							</svg>
							<a
								href="https://www.linkedin.com/company/stackit/"
								target="_blank"
								rel="noopener noreferrer"
								class="font-semibold text-white hover:underline"
							>LinkedIn</a
							>
						</div>
					</div>
				</div>
				<div class="mt-12 flex flex-col w-auto text-4xl font-semibold text-white">
					<span>Success.</span>
					<span>Coded.</span>
				</div>
			</div>
		</div>
	</div>
</footer>
