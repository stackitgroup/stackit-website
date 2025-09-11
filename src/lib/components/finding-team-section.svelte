<script>
	import CtaButton from './cta-button.svelte'
	import Typography from './typography.svelte'
</script>

<!-- Finding a good team section - Minimalist Design -->
<section
	class="py-16 bg-white dark:bg-gray-900 sm:py-20"
	aria-labelledby="finding-team-heading"
>
	<div class="max-w-2xl px-4 mx-auto text-center sm:px-6">
		<Typography variant="h2">
			Finding a good team shouldn't be so hard
		</Typography>
		<br />
		<Typography variant="p">
			Leaders with great ideas shouldn't have to struggle to find a competent, high-performing team to execute their vision.
		</Typography>
		<br />

		<CtaButton variant="primary" size="md">
			Let's Discuss
		</CtaButton>
	</div>
</section>
