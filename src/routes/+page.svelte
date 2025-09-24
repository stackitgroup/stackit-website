<script lang="ts">

	import ContactForm from '$lib/components/contact-form.svelte'
	import ExternalTeamSection from '$lib/components/external-team-section.svelte'
	import FindingTeamSection from '$lib/components/finding-team-section.svelte'
	import HeroSection from '$lib/components/hero-section.svelte'
	import PartnerSearchSection from '$lib/components/partner-search-section.svelte'
	import ProductComplexitySection from '$lib/components/product-complexity-section.svelte'
	import ProvenProcessSection from '$lib/components/proven-process-section.svelte'
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

<style>
    .sr-only {
      position: absolute;
      width: 1px;
      height: 1px;
      padding: 0;
      margin: -1px;
      overflow: hidden;
      clip: rect(0, 0, 0, 0);
      white-space: nowrap;
      border: 0;
    }

    .focus\:not-sr-only:focus {
      position: absolute;
      width: auto;
      height: auto;
      padding: 0.5rem 1rem;
      margin: 0;
      overflow: visible;
      clip: auto;
      white-space: normal;
      border: 0;
      top: 1rem;
      left: 1rem;
      z-index: 9999;
    }
  </style>
