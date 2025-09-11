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
	class="py-16 bg-white dark:bg-gray-900 sm:py-20"
	aria-labelledby="external-team-heading"
>
	<div class="max-w-4xl px-4 mx-auto text-center sm:px-6">
		<!-- Section Heading -->
		<header id="external-team-heading" class="mb-12 sm:mb-16">
			<Typography variant="h1" className="mb-4 text-center">
				Your external team should feel like a top in-house team. We deliver that experience.
			</Typography>
		</header>

		<!-- Feature Cards -->
		<div class="mb-12 space-y-6 sm:mb-16">
			{#each cards as card, idx (idx)}
				<article class="max-w-md p-6 mx-auto bg-gray-200 rounded-lg dark:bg-gray-700 sm:p-8">

					<div class="text-center">
						<Typography variant="h2" className="mb-3 text-center">{card.title}</Typography>

						<Typography variant="p" className="text-sm leading-relaxed text-gray-600 dark:text-gray-300 sm:text-base">{card.body}</Typography>

						<div class="mx-auto mt-5 bg-white rounded-full shadow-sm size-20"></div>
					</div>
				</article>
			{/each}
		</div>

		<!-- CTA Button -->
		<footer class="text-center">
			<CtaButton variant="primary" size="md">
				Let's Discuss
			</CtaButton>
		</footer>
	</div>
</section>
