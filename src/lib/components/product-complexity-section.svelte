<script>
	import GridBackground from './grid-background.svelte'
</script>

<!-- Product complexity section -->
<section
	class="relative overflow-hidden border-t border-gray-200 bg-white dark:border-gray-700 dark:bg-gray-900"
	aria-labelledby="product-complexity-heading"
>
	<GridBackground />

	<div class="relative z-10 mx-auto max-w-7xl px-4 py-16 sm:px-6 lg:px-8 lg:py-20">
		<div class="grid items-center gap-12 lg:grid-cols-2 lg:gap-16">
			<!-- Left Side: Title and Button -->
			<header class="text-center lg:text-left">
				<h2
					id="product-complexity-heading"
					class="mb-8 text-3xl leading-tight font-light text-gray-900 dark:text-white sm:text-4xl lg:mb-12 lg:text-5xl"
				>
					We know that creating a<br />
					<span class="italic">great product is complicated</span>
				</h2>

				<div class="flex justify-center lg:justify-start">
					<button
						type="button"
						class="rounded border border-green-500 bg-transparent px-6 py-2.5 text-base text-green-500 transition-colors duration-200 hover:bg-green-500 hover:text-white lg:text-lg"
					>
						Let's Talk
					</button>
				</div>
			</header>

			<!-- Right Side: Feature Points -->
			<div class="space-y-8 lg:space-y-10">
				<!-- Point 1: Blue Icon -->
				<article class="flex items-start gap-4">
					<div
						class="mt-1 flex h-8 w-8 flex-shrink-0 items-center justify-center rounded-full bg-blue-500"
						aria-hidden="true"
					>
						<svg class="h-4 w-4 text-white" fill="currentColor" viewBox="0 0 20 20">
							<path
								fill-rule="evenodd"
								d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z"
								clip-rule="evenodd"
							/>
						</svg>
					</div>
					<div>
						<p class="text-base leading-relaxed text-gray-600 dark:text-white sm:text-lg">
							Our <span class="font-medium text-blue-400">Proven Process</span> brings structure and
							discipline to development, replacing <span class="text-red-400 italic">chaos</span>
							with
							<span class="font-medium text-green-400">clarity, predictability, and quality</span>.
						</p>
					</div>
				</article>

				<!-- Point 2: Gray Icon -->
				<article class="flex items-start gap-4">
					<div
						class="mt-1 flex h-8 w-8 flex-shrink-0 items-center justify-center rounded-full bg-gray-500"
						aria-hidden="true"
					>
						<svg class="h-4 w-4 text-white" fill="currentColor" viewBox="0 0 20 20">
							<path d="M13 6a3 3 0 11-6 0 3 3 0 016 0zM18 8a2 2 0 11-4 0 2 2 0 014 0zM14 15a4 4 0 00-8 0v3h8v-3z"
							/>
						</svg>
					</div>
					<div>
						<p class="text-base leading-relaxed text-gray-600 dark:text-white sm:text-lg">
							We make <span class="font-medium text-blue-400">deep collaboration</span> a priority, which
							does more than prevent misunderstandings; it builds the shared purpose and creative energy
							that define a winning team.
						</p>
					</div>
				</article>

				<!-- Point 3: Orange Icon -->
				<article class="flex items-start gap-4">
					<div
						class="mt-1 flex h-8 w-8 flex-shrink-0 items-center justify-center rounded-full bg-orange-500"
						aria-hidden="true"
					>
						<svg class="h-4 w-4 text-white" fill="currentColor" viewBox="0 0 20 20">
							<path
								fill-rule="evenodd"
								d="M11.49 3.17c-.38-1.56-2.6-1.56-2.98 0a1.532 1.532 0 01-2.286.948c-1.372-.836-2.942.734-2.106 2.106.54.886.061 2.042-.947 2.287-1.561.379-1.561 2.6 0 2.978a1.532 1.532 0 01.947 2.287c-.836 1.372.734 2.942 2.106 2.106a1.532 1.532 0 012.287.947c.379 1.561 2.6 1.561 2.978 0a1.533 1.533 0 012.287-.947c1.372.836 2.942-.734 2.106-2.106a1.533 1.533 0 01.947-2.287c1.561-.379 1.561-2.6 0-2.978a1.532 1.532 0 01-.947-2.287c.836-1.372-.734-2.942-2.106-2.106a1.532 1.532 0 01-2.287-.947zM10 13a3 3 0 100-6 3 3 0 000 6z"
								clip-rule="evenodd"
							/>
						</svg>
					</div>
					<div>
						<p class="text-base leading-relaxed text-gray-600 dark:text-white sm:text-lg">
							We're <span class="font-medium text-orange-400">entrepreneurs at heart</span>. We
							bring a deep personal stake to your project, transforming your vision into an
							extraordinary product.
						</p>
					</div>
				</article>
			</div>
		</div>
	</div>
</section>
