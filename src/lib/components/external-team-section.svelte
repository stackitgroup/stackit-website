<script>
	import GridBackground from './grid-background.svelte'
</script>

<!-- External team experience section -->
<section
	class="relative overflow-hidden border-t border-gray-200 bg-white dark:border-gray-700 dark:bg-gray-900"
	aria-labelledby="external-team-heading"
>
	<GridBackground />

	<div class="relative z-10 mx-auto max-w-7xl px-4 py-12 sm:px-6 sm:py-16 lg:px-8 lg:py-20">
		<!-- Section Heading -->
		<header class="mb-12 text-center sm:mb-16">
			<h2
				id="external-team-heading"
				class="mb-4 px-4 text-2xl leading-tight font-light text-gray-900 dark:text-white sm:text-3xl md:text-4xl lg:text-5xl"
			>
				Your external team should feel like a top in-house<br class="hidden sm:block" />
				team. We deliver that experience.
			</h2>
		</header>

		<!-- Feature Cards -->
		<div class="mb-12 grid gap-6 sm:mb-16 sm:gap-8 md:grid-cols-3">
			<!-- Card 1: Designed to Integrate -->
			<article class="rounded-lg border border-blue-500 bg-blue-50 dark:bg-gray-800/50 p-6 backdrop-blur-sm sm:p-8">
				<h3 class="mb-3 text-center text-lg font-semibold text-blue-900 dark:text-white sm:mb-4 sm:text-xl">
					Designed to<br />
					Integrate
				</h3>
				<p class="text-center text-sm leading-relaxed text-gray-600 dark:text-gray-300 sm:text-base">
					Our In-House Drive is<br class="hidden sm:block" />
					defined by three key<br class="hidden sm:block" />
					elements: a hands-on<br class="hidden sm:block" />
					engineering discipline,<br class="hidden sm:block" />
					always-collaborate-first<br class="hidden sm:block" />
					and an ingrained<br class="hidden sm:block" />
					entrepreneurial spirit.
				</p>
			</article>

			<!-- Card 2: Your Success is Our Success -->
			<article class="rounded-lg border border-yellow-500 bg-yellow-50 dark:bg-gray-800/50 p-6 backdrop-blur-sm sm:p-8"
			>
				<h3 class="mb-3 text-center text-lg font-semibold text-yellow-900 dark:text-white sm:mb-4 sm:text-xl">
					Your Success is Our<br />
					Success
				</h3>
				<p class="text-center text-sm leading-relaxed text-gray-600 dark:text-gray-300 sm:text-base">
					All our achievements<br class="hidden sm:block" />
					are forged from the<br class="hidden sm:block" />
					shared pursuit of<br class="hidden sm:block" />
					excellence and the<br class="hidden sm:block" />
					drive to create<br class="hidden sm:block" />
					something truly<br class="hidden sm:block" />
					impactful. It's the<br class="hidden sm:block" />
					foundation we're built<br class="hidden sm:block" />
					on.
				</p>
			</article>

			<!-- Card 3: More Than Just Code -->
			<article class="rounded-lg border border-red-500 bg-red-50 dark:bg-gray-800/50 p-6 backdrop-blur-sm sm:p-8">
				<h3 class="mb-3 text-center text-lg font-semibold text-red-900 dark:text-white sm:mb-4 sm:text-xl">
					More Than Just<br />
					Code
				</h3>
				<p class="text-center text-sm leading-relaxed text-gray-600 dark:text-gray-300 sm:text-base">
					Exceptional Software<br class="hidden sm:block" />
					is the result. As one<br class="hidden sm:block" />
					team, you'll always<br class="hidden sm:block" />
					get more than just<br class="hidden sm:block" />
					code; you get the<br class="hidden sm:block" />
					perfect storm for<br class="hidden sm:block" />
					innovation.
				</p>
			</article>
		</div>

		<!-- CTA Button -->
		<footer class="text-center">
			<button
				type="button"
				class="rounded border border-green-500 bg-transparent px-6 py-2.5 text-base text-green-500 transition-colors duration-200 hover:bg-green-500 hover:text-white sm:px-8 sm:py-3 sm:text-lg"
			>
				Call To Action
			</button>
		</footer>
	</div>
</section>
