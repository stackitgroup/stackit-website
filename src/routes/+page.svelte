<script lang="ts">
	import ContactForm from '$lib/components/contact-form.svelte';
	import ExternalTeamSection from '$lib/components/external-team-section.svelte';
	import FindingTeamSection from '$lib/components/finding-team-section.svelte';
	import HeroSection from '$lib/components/hero-section.svelte';
	import PartnerSearchSection from '$lib/components/partner-search-section.svelte';
	import ProductComplexitySection from '$lib/components/product-complexity-section.svelte';
	import ProvenProcessSection from '$lib/components/proven-process-section.svelte';

</script>

<main id="main-content" aria-label="Main content" class="relative">
	<HeroSection />
	<FindingTeamSection />
	<ExternalTeamSection />
	<ProductComplexitySection />
	<ProvenProcessSection />
	<PartnerSearchSection />
</main>

<ContactForm />


