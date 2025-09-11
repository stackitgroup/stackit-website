<script>
	import CtaButton from './cta-button.svelte'
	import Typography from './typography.svelte'

	const cards = [
		{
			title: 'Designed to Integrate',
			body: 'Our In-House Drive is defined by three key principles: rigorous engineering discipline, deep collaboration, and an ingrained entrepreneurial spirit.'
		},
		{
			title: 'Your Success is Our Success',
			body: 'True Partnerships are forged from the shared pursuit of excellence and the drive to create something truly impactful. It\'s the foundation we\'re built on.'
		},
		{
			title: 'More Than Just Code',
			body: 'Exceptional Software is the result. As one cohesive team, you get more than just code—you get the perfect storm for innovation.'
		}
	]
</script>

<!-- External team experience section - Minimalist Design -->
<section
	class="py-12 bg-white dark:bg-gray-900 sm:py-16 md:py-20 lg:py-24"
	aria-labelledby="external-team-heading"
>
	<div class="px-4 mx-auto text-center max-w-7xl sm:px-6 lg:px-8">
		<!-- Section Heading -->
		<header id="external-team-heading" class="mb-8 sm:mb-12 md:mb-16 lg:mb-20">
			<Typography variant="h2" className="mb-4 text-center max-w-4xl mx-auto">
				Your external team should feel like a top in-house team. We deliver that experience.
			</Typography>
		</header>

		<!-- Feature Cards -->
		<div class="mb-12 sm:mb-16 md:mb-20">
			<div class="grid gap-6 sm:gap-8 md:grid-cols-2 lg:grid-cols-3 xl:gap-10">
				{#each cards as card, idx (idx)}
					<article class="p-6 transition-transform duration-200 bg-gray-200 rounded-lg dark:bg-gray-700 sm:p-8 md:p-6 lg:p-8 hover:scale-105">
						<div class="text-center">
							<Typography variant="h3" className="mb-3 text-center">{card.title}</Typography>

							<Typography variant="p" className="mb-5 text-sm leading-relaxed text-gray-600 dark:text-gray-300 sm:text-base lg:text-sm xl:text-base">{card.body}</Typography>

							<div class="mx-auto bg-white rounded-full shadow-sm size-16 sm:size-20 lg:size-16 xl:size-20"></div>
						</div>
					</article>
				{/each}
			</div>
		</div>

		<!-- CTA Button -->
		<footer class="text-center">
			<CtaButton variant="primary" size="md">
				Let's Discuss
			</CtaButton>
		</footer>
	</div>
</section>
