<script>
	import GridBackground from './grid-background.svelte'
</script>

<!-- Proven Process section -->
<section
	class="relative overflow-hidden border-t border-gray-200 bg-gray-50 dark:border-gray-700 dark:bg-gray-900"
	aria-labelledby="proven-process-heading"
>
	<GridBackground />

	<div class="relative z-10 mx-auto max-w-6xl px-4 py-16 sm:px-6 lg:px-8 lg:py-24">
		<!-- Section Heading -->
		<header class="mb-16 text-center lg:mb-20">
			<h2
				id="proven-process-heading"
				class="text-3xl leading-tight font-light text-gray-900 dark:text-white sm:text-4xl lg:text-5xl"
			>
				Our Proven Process
			</h2>
		</header>

		<!-- Process Steps -->
		<div class="relative">
			<!-- Vertical Line (Hidden on mobile, visible on larger screens) -->
			<div
				class="absolute top-0 bottom-0 left-8 -z-10 hidden w-0.5 bg-gradient-to-b from-blue-500 via-green-500 via-purple-500 via-red-500 via-teal-500 via-yellow-500 to-orange-500 lg:block"
				aria-hidden="true"
			></div>

			<!-- Process Steps List -->
			<ol class="space-y-12 lg:space-y-16">
				<!-- Step 1: Introduction Call -->
				<li class="flex items-start gap-6 lg:gap-8">
					<div
						class="flex h-12 w-12 flex-shrink-0 items-center justify-center rounded-full bg-blue-500 lg:h-16 lg:w-16"
						aria-hidden="true"
					>
						<span class="text-lg font-bold text-gray-900 dark:text-white lg:text-xl">1</span>
					</div>
					<article class="flex-1">
						<h3 class="mb-2 text-xl font-semibold text-gray-900 dark:text-white lg:text-2xl">Introduction Call</h3>
						<p class="mb-3 text-sm font-medium text-blue-400 lg:text-base">
							A conversation to explore your vision and our process
						</p>
						<p class="text-sm leading-relaxed text-gray-600 dark:text-gray-300 lg:text-base">
							We hold a structured, two-way conversation to understand your vision, challenges, and
							goals. We'll provide a transparent overview of our process, ensuring we both have a
							shared perspective.
						</p>
					</article>
				</li>

				<!-- Step 2: Clarify the Why -->
				<li class="flex items-start gap-6 lg:gap-8">
					<div
						class="flex h-12 w-12 flex-shrink-0 items-center justify-center rounded-full bg-yellow-500 lg:h-16 lg:w-16"
						aria-hidden="true"
					>
						<span class="text-lg font-bold text-gray-900 dark:text-white lg:text-xl">2</span>
					</div>
					<article class="flex-1">
						<h3 class="mb-2 text-xl font-semibold text-gray-900 dark:text-white lg:text-2xl">Clarify the Why</h3>
						<p class="mb-3 text-sm font-medium text-yellow-400 lg:text-base">
							Uncovering Your Purpose
						</p>
						<p class="text-sm leading-relaxed text-gray-600 dark:text-gray-300 lg:text-base">
							We dig deep to get to the heart of your project's why and what success truly looks
							like. By mapping out your product roadmap against practical terms like budget and
							timeline, we create a realistic roadmap for your vision.
						</p>
					</article>
				</li>

				<!-- Step 3: Proposal -->
				<li class="flex items-start gap-6 lg:gap-8">
					<div
						class="flex h-12 w-12 flex-shrink-0 items-center justify-center rounded-full bg-red-500 lg:h-16 lg:w-16"
						aria-hidden="true"
					>
						<span class="text-lg font-bold text-gray-900 dark:text-white lg:text-xl">3</span>
					</div>
					<article class="flex-1">
						<h3 class="mb-2 text-xl font-semibold text-gray-900 dark:text-white lg:text-2xl">Proposal</h3>
						<p class="mb-3 text-sm font-medium text-red-400 lg:text-base">
							Creating the game plan for the winning team
						</p>
						<p class="text-sm leading-relaxed text-gray-600 dark:text-gray-300 lg:text-base">
							Building on our shared understanding, we present your tailored game plan. The
							comprehensive proposal clearly defines the path deliverables, timeline, and team
							structure, giving you full confidence in the path ahead.
						</p>
					</article>
				</li>

				<!-- Step 4: Build Mode ON -->
				<li class="flex items-start gap-6 lg:gap-8">
					<div
						class="flex h-12 w-12 flex-shrink-0 items-center justify-center rounded-full bg-purple-500 lg:h-16 lg:w-16"
						aria-hidden="true"
					>
						<span class="text-lg font-bold text-gray-900 dark:text-white lg:text-xl">4</span>
					</div>
					<article class="flex-1">
						<h3 class="mb-2 text-xl font-semibold text-gray-900 dark:text-white lg:text-2xl">Build Mode ON</h3>
						<p class="mb-3 text-sm font-medium text-purple-400 lg:text-base">
							Building with Confidence From Day One
						</p>
						<p class="text-sm leading-relaxed text-gray-600 dark:text-gray-300 lg:text-base">
							With our game plan in place, we translate big-level requirements into achievable
							tasks. Our team establishes a clear collaboration protocol and primes the technical
							environment for a purposeful and efficient build.
						</p>
					</article>
				</li>

				<!-- Step 5: Pulse -->
				<li class="flex items-start gap-6 lg:gap-8">
					<div
						class="flex h-12 w-12 flex-shrink-0 items-center justify-center rounded-full bg-green-500 lg:h-16 lg:w-16"
						aria-hidden="true"
					>
						<span class="text-lg font-bold text-gray-900 dark:text-white lg:text-xl">5</span>
					</div>
					<article class="flex-1">
						<h3 class="mb-2 text-xl font-semibold text-gray-900 dark:text-white lg:text-2xl">Pulse</h3>
						<p class="mb-3 text-sm font-medium text-green-400 lg:text-base">
							See your vision manifest - two weeks at a time
						</p>
						<p class="text-sm leading-relaxed text-gray-600 dark:text-gray-300 lg:text-base">
							Your project comes alive in a steady "Pulse" of focused, two-week development cycles.
							Every Pulse cycle ends with tangible progress, quick test, and iterative alignment,
							delivering to our core promise: a demonstration of working software every two weeks.
						</p>
					</article>
				</li>

				<!-- Step 6: The Quality Gate -->
				<li class="flex items-start gap-6 lg:gap-8">
					<div
						class="flex h-12 w-12 flex-shrink-0 items-center justify-center rounded-full bg-teal-500 lg:h-16 lg:w-16"
						aria-hidden="true"
					>
						<span class="text-lg font-bold text-gray-900 dark:text-white lg:text-xl">6</span>
					</div>
					<article class="flex-1">
						<h3 class="mb-2 text-xl font-semibold text-gray-900 dark:text-white lg:text-2xl">The Quality Gate</h3>
						<p class="mb-3 text-sm font-medium text-teal-400 lg:text-base">
							Your Green Light for a Confident Launch
						</p>
						<p class="text-sm leading-relaxed text-gray-600 dark:text-gray-300 lg:text-base">
							Before launch, we ensure your software meets readiness. Every feature is rigorously
							tested against our highest standards, and we prepare your dedicated environment and
							empower your team for a seamless, confident go-live.
						</p>
					</article>
				</li>

				<!-- Step 7: Beyond Launch -->
				<li class="flex items-start gap-6 lg:gap-8">
					<div
						class="flex h-12 w-12 flex-shrink-0 items-center justify-center rounded-full bg-orange-500 lg:h-16 lg:w-16"
						aria-hidden="true"
					>
						<span class="text-lg font-bold text-gray-900 dark:text-white lg:text-xl">7</span>
					</div>
					<article class="flex-1">
						<h3 class="mb-2 text-xl font-semibold text-gray-900 dark:text-white lg:text-2xl">Beyond Launch</h3>
						<p class="mb-3 text-sm font-medium text-orange-400 lg:text-base">
							Your Partner in Continued Growth and Evolution
						</p>
						<p class="text-sm leading-relaxed text-gray-600 dark:text-gray-300 lg:text-base">
							With your solution live, our focus shifts to ensuring its ongoing success. We provide
							robust support and proactive monitoring, turning system insights into actionable
							intelligence that drives your business forward.
						</p>
					</article>
				</li>
			</ol>
		</div>

		<!-- CTA Button -->
		<footer class="mt-16 text-center lg:mt-20">
			<button
				type="button"
				class="rounded border border-green-500 bg-transparent px-6 py-2.5 text-base text-green-500 transition-colors duration-200 hover:bg-green-500 hover:text-white sm:px-8 sm:py-3 sm:text-lg"
			>
				Introduction Call
			</button>
		</footer>
	</div>
</section>
