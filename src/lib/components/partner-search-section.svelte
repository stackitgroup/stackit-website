<script>
	import GridBackground from './grid-background.svelte'
</script>

<!-- Partner search section -->
<section
	class="relative overflow-hidden border-t border-gray-700 bg-gray-900"
	aria-labelledby="partner-search-heading"
>
	<GridBackground />

	<div class="relative z-10 mx-auto max-w-5xl px-4 py-16 sm:px-6 lg:px-8 lg:py-24">
		<!-- Large background text effect -->
		<div
			class="pointer-events-none absolute inset-0 flex items-center justify-center"
			aria-hidden="true"
		>
			<div class="text-6xl font-bold text-gray-800 opacity-10 select-none sm:text-8xl lg:text-9xl">
				STACKIT
			</div>
		</div>

		<div class="relative z-10 text-center">
			<!-- Section Heading -->
			<header class="mb-8 lg:mb-12">
				<h2
					id="partner-search-heading"
					class="mb-6 text-3xl leading-tight font-light text-white sm:text-4xl lg:text-5xl"
				>
					<span class="italic">The Partner You've been searching for.</span>
				</h2>
			</header>

			<!-- Description -->
			<div class="mb-8 lg:mb-12">
				<p class="mx-auto max-w-4xl text-lg leading-relaxed text-gray-300 sm:text-xl lg:text-2xl">
					The search for a capable dev partner shouldn't end in frustration and chaos.<br class="hidden sm:block"
					/>
					We're equipped with a clear understanding of what goes into running<br class="hidden sm:block"
					/>
					and start building the extraordinary software their vision demands.
				</p>
			</div>

			<!-- CTA Link -->
			<footer>
				<button
					type="button"
					class="border-0 border-b border-b-2 border-green-400 bg-transparent pb-1 text-lg text-green-400 transition-colors duration-200 hover:border-green-300 hover:text-green-300 lg:text-xl"
				>
					Continue reading
				</button>
			</footer>
		</div>
	</div>
</section>
