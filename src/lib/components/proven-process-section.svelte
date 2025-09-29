<script>
	import { openContactPanel } from '$lib/stores/ui.store.svelte'

	const processSteps = [
		{
			number: '01',
			title: 'Introduction Call',
			subtitle: 'A conversation to explore your vision and our process',
			description: 'We hold a structured, two-way conversation to understand your vision, challenges, and goals. We\'ll provide a transparent overview of our process, ensuring we both have a confident decision on our fit as partners.'
		},
		{
			number: '02',
			title: 'Clarify the Why',
			subtitle: 'Uncovering Your Purpose',
			description: 'We dig deep to get to the heart of your project\'s \'why\' and what success truly looks like. By mapping out your product needs against practical limits like budget and timeline, we create a feasible roadmap for your vision.'
		},
		{
			number: '03',
			title: 'Proposal',
			subtitle: 'Creating the game plan for the winning team',
			description: 'Building on our shared understanding, we present your tailored game plan. This comprehensive proposal clearly outlines the cost, deliverables, timeline, and team structure, giving you full confidence in the path ahead.'
		},
		{
			number: '04',
			title: 'Build Mode: ON',
			subtitle: 'Building with Confidence, From Day One',
			description: 'With the game plan in place, we translate high-level requirements into actionable tasks. Our team establishes a clear collaboration protocol and primes the technical environment for a purposeful and efficient build.'
		},
		{
			number: '05',
			title: 'Pulse',
			subtitle: 'See your vision manifest – two weeks at a time',
			description: 'Your project comes alive in a steady "Pulse" of focused, two-week development cycles. This rhythm makes progress visible and maintains alignment, culminating in our core promise: a demonstration of working software every two weeks.'
		},
		{
			number: '06',
			title: 'The Quality Gate',
			subtitle: 'Your Green Light for a Confident Launch',
			description: 'Before launch, we ensure total readiness. Every feature is rigorously tested against our highest standards, and we prepare your operational environment and empower your team for a seamless, confident go-live.'
		},
		{
			number: '07',
			title: 'Beyond Launch',
			subtitle: 'Your Partner in Continuous Growth and Evolution',
			description: 'With your solution live, our focus shifts to ensuring its ongoing success. We provide robust support and proactive monitoring, turning system insights into actionable intelligence that informs your next strategic move.'
		}
	]
</script>

<section id="process" class="py-20 bg-black md:py-32">
	<div class="container px-6 mx-auto">
		<div class="grid items-start gap-12 lg:grid-cols-3">
			<div class="lg:col-span-1 lg:sticky top-28">
				<h2 class="text-4xl font-bold text-white sm:text-5xl md:text-6xl fade-in-section"
				>
					Our proven process
				</h2>
				<p
					class="mt-6 text-xl text-gray-300 fade-in-section"
					style="transition-delay: 100ms"
				>
					From initial idea to final launch, we've engineered a process
					that ensures clarity, predictability, and quality at every step.
					This is how we build extraordinary software, together.
				</p>
				<div class="hidden mt-8 lg:block fade-in-section">
					<button
						onclick={openContactPanel}
						class="whitespace-nowrap bg-[#3F5FDD] text-white font-semibold px-12 py-4 text-lg sm:px-22 sm:py-6 sm:text-xl hover:bg-[#3550B8] transition-colors duration-300 inline-block rounded-lg"
					>Introduction Call</button>
				</div>
			</div>
			<div class="lg:col-span-2">
				<div>
					{#each processSteps as step, index (step.number)}
						<div class="flex fade-in-section">
							<div class="flex flex-col items-center mr-6">
								<div class="flex-shrink-0 w-12 h-12 rounded-full bg-[#3550B8] text-white flex items-center justify-center font-bold text-xl">
									{step.number}
								</div>
								{#if index < processSteps.length - 1}
									<div class="w-px h-full bg-gray-700"></div>
								{/if}
							</div>
							<div class="pt-1 {index < processSteps.length - 1 ? 'pb-12' : ''}">
								<h3 class="mb-2 text-2xl font-bold text-white">
									{step.title}
								</h3>
								<p class="mb-4 text-lg font-medium text-gray-400 italic">
									{step.subtitle}
								</p>
								<p class="text-gray-300">
									{step.description}
								</p>
							</div>
						</div>
					{/each}
				</div>
			</div>
		</div>
		<div class="flex items-center justify-center mt-12 space-x-6 lg:hidden"
		>
			<button
				onclick={openContactPanel}
				class="bg-[#3F5FDD] text-white text-center font-semibold px-12 py-4 text-lg sm:px-24 sm:py-6 sm:text-xl hover:bg-[#3550B8] transition-colors duration-300 inline-block w-full md:w-auto rounded-lg"
			>Introduction Call
			</button>
		</div>
	</div>
</section>
