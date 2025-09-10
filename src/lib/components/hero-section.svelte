<script>
	import GridBackground from './grid-background.svelte'
</script>

<!-- Hero Section with semantic HTML -->
<section class="relative min-h-screen overflow-hidden bg-gray-50 dark:bg-gray-900" aria-labelledby="hero-heading">
	<GridBackground />

	<!-- Hero Content -->
	<div class="relative z-10 mx-auto max-w-7xl px-4 pt-16 pb-12 sm:px-6 sm:pt-20 sm:pb-16 lg:px-8">
		<div class="text-center">
			<!-- Main Heading -->
			<h1
				id="hero-heading"
				class="mb-6 text-3xl leading-tight font-light text-gray-900 dark:text-white sm:mb-8 sm:text-4xl md:text-5xl lg:text-6xl xl:text-7xl"
			>
				Your External Dev Team <br />
				<span class="italic">with In-House Drive</span>
			</h1>

			<!-- Subtitle -->
			<p class="mx-auto mb-8 max-w-3xl px-4 text-lg leading-relaxed text-gray-600 dark:text-gray-300 sm:mb-12 sm:text-xl md:text-2xl">
				Build extraordinary software, with a partner who<br class="hidden sm:block" />
				shares your standards
			</p>

			<!-- CTA Button -->
			<div>
				<button
					type="button"
					class="rounded border border-green-500 bg-transparent px-6 py-2.5 text-base text-green-500 transition-colors duration-200 hover:bg-green-500 hover:text-white sm:px-8 sm:py-3 sm:text-lg"
				>
					Get in Touch
				</button>
			</div>
		</div>
	</div>
</section>
