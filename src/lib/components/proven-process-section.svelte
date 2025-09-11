<script>
	import GridBackground from './grid-background.svelte'
	import CtaButton from './cta-button.svelte'
	import Typography from './typography.svelte'

	const processSteps = [
		{
			title: 'Introduction Call',
			subtitle: 'A conversation to explore your vision and our process',
			description: 'We hold a structured, two-way conversation to understand your vision, challenges, and goals. We will provide a transparent overview of our process, ensuring we both have a shared perspective.'
		},
		{
			title: 'Clarify the Why',
			subtitle: 'Uncovering Your Purpose',
			description: 'We dig deep to get to the heart of your project\'s why and what success truly looks like. By mapping out your product roadmap against practical terms like budget and timeline, we create a realistic roadmap for your vision.'
		},
		{
			title: 'Proposal',
			subtitle: 'Creating the game plan for the winning team',
			description: 'Building on our shared understanding, we present your tailored game plan. The comprehensive proposal clearly defines the path deliverables, timeline, and team structure, giving you full confidence in the path ahead.'
		},
		{
			title: 'Build Mode: ON',
			subtitle: 'Building with Confidence From Day One',
			description: 'With our game plan in place, we translate big-level requirements into achievable tasks. Our team establishes a clear collaboration protocol and primes the technical environment for a purposeful and efficient build.'
		},
		{
			title: 'Pulse',
			subtitle: 'See your vision manifest - two weeks at a time',
			description: 'Your project comes alive in a steady "Pulse" of focused, two-week development cycles. Every Pulse cycle ends with tangible progress, quick test, and iterative alignment, delivering to our core promise: a demonstration of working software every two weeks.'
		},
		{
			title: 'The Quality Gate',
			subtitle: 'Your Green Light for a Confident Launch',
			description: 'Before launch, we ensure your software meets readiness. Every feature is rigorously tested against our highest standards, and we prepare your dedicated environment and empower your team for a seamless, confident go-live.'
		},
		{
			title: 'Beyond Launch',
			subtitle: 'Your Partner in Continued Growth and Evolution',
			description: 'With your solution live, our focus shifts to ensuring its ongoing success. We provide robust support and proactive monitoring, turning system insights into actionable intelligence that drives your business forward.'
		}
	]
</script>

<!-- Proven Process section -->
<section
	class="relative overflow-hidden"
	aria-labelledby="proven-process-heading"
>
	<GridBackground />

	<div class="relative z-10 max-w-6xl px-4 py-16 mx-auto sm:px-6 lg:px-8 lg:py-24">
		<!-- Section Heading -->
		<header class="mb-16 text-center lg:mb-20">
			<Typography variant="h2">
				Our Proven Process
			</Typography>
		</header>

		<!-- Process Steps -->
		<div class="relative">
			<!-- Vertical Line (Hidden on mobile, visible on larger screens) -->
			<div
				class="absolute top-0 bottom-0 z-0 hidden w-px bg-gray-400 left-6 lg:block"
				aria-hidden="true"
			></div>

			<!-- Process Steps List -->
			<ol class="space-y-12 lg:space-y-16">
				{#each processSteps as step, index (step.title)}
					<li class="relative flex items-start gap-6 lg:gap-8">
						<div class="relative z-10 flex items-center justify-center flex-shrink-0 w-12 h-12 bg-gray-200 rounded-full lg:h-16 lg:w-16" aria-hidden="true"></div>

						{#if index < processSteps.length - 1}
							<!-- Connector line below the circle for this step (visible on lg+) -->
							<div class="absolute bottom-0 z-0 block w-px bg-gray-300 left-6 top-12 lg:hidden" aria-hidden="true"></div>
						{/if}
						<article class="flex-1">
							<Typography variant="h3" className="mb-2">{step.title}</Typography>
							<Typography variant="p" className="mb-3 font-medium">{step.subtitle}</Typography>
							<Typography variant="p" className="text-sm">{step.description}</Typography>
						</article>
					</li>
				{/each}
			</ol>
		</div>

		<!-- CTA Button -->
		<footer class="mt-16 text-center lg:mt-20">
			<CtaButton variant="primary" size="lg">
				Introduction Call
			</CtaButton>
		</footer>
	</div>
</section>
