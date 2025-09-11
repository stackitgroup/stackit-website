<script>
	import GridBackground from './grid-background.svelte'
	import Typography from './typography.svelte'
</script>

<!-- Partner search section -->
<section
	class="relative overflow-hidden border-t border-b border-gray-200 bg-gray-50 dark:border-gray-700 dark:bg-gray-900"
	aria-labelledby="partner-search-heading"
>
	<GridBackground />

	<div class="relative z-10 max-w-5xl px-4 py-16 mx-auto sm:px-6 lg:px-8 lg:py-24">
		<!-- Large background text effect -->
		<div
			class="absolute inset-0 flex items-center justify-center pointer-events-none"
			aria-hidden="true"
		>
			<div class="text-6xl font-bold text-gray-800 select-none opacity-10 sm:text-8xl lg:text-9xl">
				STACKIT
			</div>
		</div>

		<div class="relative z-10">
			<!-- Section Heading (centered, bold) -->
			<header id="partner-search-heading" class="mb-6 text-center lg:mb-8">
				<Typography variant="h1" className="mb-2">
					The Partner You've been searching for...
				</Typography>
			</header>

			<!-- Description (left-aligned block) -->
			<div class="mb-6 lg:mb-8">
				<Typography variant="p" className="max-w-3xl mx-auto text-left">
					The search for a capable dev partner shouldn't end in frustration and chaos. We've designed a clear path for leaders who are ready to stop micromanaging and start building the extraordinary software their vision demands.
				</Typography>
			</div>

			<!-- CTA Link (underlined, left-aligned within content width) -->
			<div class="mt-4">
				<div class="max-w-3xl mx-auto">
					<a href="#partners" class="text-lg font-medium text-gray-900 underline decoration-current hover:text-gray-700">Continue reading...</a>
				</div>
			</div>
		</div>
	</div>
</section>
