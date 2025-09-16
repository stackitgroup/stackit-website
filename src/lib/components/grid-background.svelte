<script>
	export let className = ''
</script>

<!-- Grid Pattern Background -->
<div class="absolute inset-0 grid-bg {className}" aria-hidden="true">
	<div class="grid-bg-inner"></div>
</div>

<style>
	.grid-bg { pointer-events: none; z-index: 0; }

	/* CSS variables to make tweaking easier */
	.grid-bg-inner {
		width: 100%;
		height: 100%;
		/* larger gap and very delicate lines */
		--grid-gap: 48px; /* distance between grid lines */
		--grid-opacity-light: 0.02;
		--grid-opacity-dark: 0.03;

		background-image:
			repeating-linear-gradient(0deg, transparent, transparent var(--grid-gap), rgba(0,0,0,var(--grid-opacity-light)) var(--grid-gap), rgba(0,0,0,var(--grid-opacity-light)) calc(var(--grid-gap) + 1px)),
			repeating-linear-gradient(90deg, transparent, transparent var(--grid-gap), rgba(0,0,0,var(--grid-opacity-light)) var(--grid-gap), rgba(0,0,0,var(--grid-opacity-light)) calc(var(--grid-gap) + 1px));
	}

	/* Dark theme: subtle light grid lines */
	:global(.dark) .grid-bg-inner {
		--grid-gap: 48px;
		background-image:
			repeating-linear-gradient(0deg, transparent, transparent var(--grid-gap), rgba(255,255,255,var(--grid-opacity-dark)) var(--grid-gap), rgba(255,255,255,var(--grid-opacity-dark)) calc(var(--grid-gap) + 1px)),
			repeating-linear-gradient(90deg, transparent, transparent var(--grid-gap), rgba(255,255,255,var(--grid-opacity-dark)) var(--grid-gap), rgba(255,255,255,var(--grid-opacity-dark)) calc(var(--grid-gap) + 1px));
	}

</style>
