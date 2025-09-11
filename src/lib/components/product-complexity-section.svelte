<script>
	import CtaButton from './cta-button.svelte'
	import Typography from './typography.svelte'

	const features = [
		{ color: '#667aa0', text: 'Our Proven Process brings structure and discipline to development, replacing chaos with clarity, predictability, and quality.' },
		{ color: '#8b5a52', text: 'We make deep collaboration a priority, which does more than prevent misunderstandings—it builds the shared purpose and creative energy that define a winning team.' },
		{ color: '#8d6b00', text: 'We\'re entrepreneurs at heart. We bring a deep personal stake to your project, transforming your vision into an extraordinary product.' }
	]
</script>

<!-- Product complexity section -->
<section class="py-16 bg-white dark:bg-gray-900 sm:py-24">
	<div class="max-w-2xl px-4 mx-auto text-center sm:px-6">
		<!-- Title -->
		<Typography variant="h2" className="mb-16 text-center">
			We know that creating a great<br />product is complicated
		</Typography>

		<!-- Feature Points -->
		<div class="mb-16 space-y-12">
			{#each features as f, i (i)}
				<div class="flex items-start gap-6 text-left">
					<div class="flex-shrink-0 w-12 h-12 mt-1 rounded-full" style="background:{f.color}"></div>
					<Typography variant="p">{f.text}</Typography>
				</div>
			{/each}
		</div>

		<!-- CTA Button -->
		<div class="flex justify-center">
			<CtaButton variant="primary" size="md">
				Let's Talk
			</CtaButton>
		</div>
	</div>
</section>
