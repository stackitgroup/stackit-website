<script>
	import GridBackground from './grid-background.svelte'
</script>

<!-- Finding a good team section -->
<section
	class="relative overflow-hidden border-t border-gray-700 bg-gray-900"
	aria-labelledby="finding-team-heading"
>
	<GridBackground />

	<div class="relative z-10 mx-auto max-w-4xl px-4 py-12 sm:px-6 sm:py-16 lg:px-8 lg:py-20">
		<div class="text-center">
			<!-- Section Heading -->
			<h2
				id="finding-team-heading"
				class="mb-6 text-2xl leading-tight font-light text-white sm:mb-8 sm:text-3xl md:text-4xl lg:text-5xl"
			>
				Finding a good team shouldn't be so hard
			</h2>

			<!-- Section Description -->
			<p
				class="mx-auto mb-8 max-w-2xl px-4 text-base leading-relaxed text-gray-300 sm:mb-12 sm:text-lg md:text-xl"
			>
				Leaders with great ideas shouldn't have to struggle<br class="hidden sm:block" />
				to find a competent, high-performing team to<br class="hidden sm:block" />
				execute their vision.
			</p>

			<!-- CTA Button -->
			<div>
				<button
					type="button"
					class="rounded border border-green-500 bg-transparent px-6 py-2.5 text-base text-green-500 transition-colors duration-200 hover:bg-green-500 hover:text-white sm:px-8 sm:py-3 sm:text-lg"
				>
					Let's Discuss
				</button>
			</div>
		</div>
	</div>
</section>
