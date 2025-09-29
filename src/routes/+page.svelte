<script lang="ts">
	import ExternalTeamSection from '$lib/components/external-team-section.svelte'
	import FindingTeamSection from '$lib/components/finding-team-section.svelte'
	import HeroSection from '$lib/components/hero-section.svelte'
	import PartnerSearchSection from '$lib/components/partner-search-section.svelte'
	import ProductComplexitySection from '$lib/components/product-complexity-section.svelte'
	import ProvenProcessSection from '$lib/components/proven-process-section.svelte'
	import SiteHeader from '$lib/components/site-header.svelte'
	import JsonLd from '$lib/components/json-ld.svelte'
	import { generateWebPage, generateService } from '$lib/json-ld'
	import { STACKIT_SERVICES } from '$lib/config/json-ld-config'

	// Datos específicos de la página principal
	const homePageData = generateWebPage({
		name: 'StackIT - Página Principal',
		description: 'Consultora especializada en desarrollo de software y soluciones tecnológicas para empresas.',
		url: 'https://stackit.group',
		isPartOf: {
			name: 'StackIT',
			url: 'https://stackit.group'
		},
		inLanguage: 'es',
		dateModified: new Date().toISOString()
	})
</script>

<!-- JSON-LD específico de la página principal -->
<JsonLd data={homePageData} />
<JsonLd data={STACKIT_SERVICES.map(service => generateService(service))} />

<main id="main-content" aria-label="Main content" class="relative">
	<SiteHeader />
	<HeroSection />
	<FindingTeamSection />
	<ExternalTeamSection />
	<ProductComplexitySection />
	<ProvenProcessSection />
	<PartnerSearchSection />
</main>
