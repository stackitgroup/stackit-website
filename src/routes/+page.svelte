<script>
	import HeroSection from '$lib/components/hero-section.svelte'
	import FindingTeamSection from '$lib/components/finding-team-section.svelte'
	import ExternalTeamSection from '$lib/components/external-team-section.svelte'
	import PartnerSearchSection from '$lib/components/partner-search-section.svelte'
	import ProductComplexitySection from '$lib/components/product-complexity-section.svelte'
	import ProvenProcessSection from '$lib/components/proven-process-section.svelte'
	import GridBackground from '$lib/components/grid-background.svelte'
</script>

<main class="relative px-5">
	<GridBackground className="z-10 pointer-events-none" />
	<HeroSection />
	<FindingTeamSection />
	<ExternalTeamSection />
	<ProductComplexitySection />
	<ProvenProcessSection />
	<PartnerSearchSection />
</main>
