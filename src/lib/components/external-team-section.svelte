<script>
	import GridBackground from './grid-background.svelte'

	const cards = [
		{
			title: 'Designed to\nIntegrate',
			titleColor: 'text-blue-900',
			border: 'border-blue-500',
			bg: 'bg-blue-50',
			body: [
				'Our In-House Drive is',
				'defined by three key',
				'elements: a hands-on',
				'engineering discipline,',
				'always-collaborate-first',
				'and an ingrained',
				'entrepreneurial spirit.'
			]
		},
		{
			title: 'Your Success is Our\nSuccess',
			titleColor: 'text-yellow-900',
			border: 'border-yellow-500',
			bg: 'bg-yellow-50',
			body: [
				'All our achievements',
				'are forged from the',
				'shared pursuit of',
				'excellence and the',
				'drive to create',
				'something truly',
				'impactful. It\'s the',
				'foundation we\'re built',
				'on.'
			]
		},
		{
			title: 'More Than Just\nCode',
			titleColor: 'text-red-900',
			border: 'border-red-500',
			bg: 'bg-red-50',
			body: [
				'Exceptional Software',
				'is the result. As one',
				'team, you\'ll always',
				'get more than just',
				'code; you get the',
				'perfect storm for',
				'innovation.'
			]
		}
	]
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
			{#each cards as card, idx (idx)}
				<article class="rounded-lg border {card.border} {card.bg} dark:bg-gray-800/50 p-6 backdrop-blur-sm sm:p-8">
					<h3 class="mb-3 text-center text-lg font-semibold {card.titleColor} text-balance dark:text-white sm:mb-4 sm:text-xl">
						{card.title}
					</h3>
					<p class="text-center text-sm leading-relaxed text-gray-600 dark:text-gray-300 sm:text-base">
						{#each card.body as line, i (i)}
							<span>{line}</span>
							{#if i < card.body.length - 1}
								<br class="hidden sm:block" />
							{/if}
						{/each}
					</p>
				</article>
			{/each}
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
