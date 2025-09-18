<script lang="ts">
	import ContactForm from '$lib/components/contact-form.svelte';
	import ExternalTeamSection from '$lib/components/external-team-section.svelte';
	import FindingTeamSection from '$lib/components/finding-team-section.svelte';
	import HeroSection from '$lib/components/hero-section.svelte';
	import PartnerSearchSection from '$lib/components/partner-search-section.svelte';
	import ProductComplexitySection from '$lib/components/product-complexity-section.svelte';
	import ProvenProcessSection from '$lib/components/proven-process-section.svelte';
	import { onMount } from 'svelte';

	onMount(() => {
		const sections = document.querySelectorAll('.fade-in-section')

		const observer = new IntersectionObserver(
			(entries) => {
				entries.forEach((entry) => {
					if (entry.isIntersecting) {
						entry.target.classList.add('is-visible')
					}
				})
			},
			{
				threshold: 0.1
			}
		)

		sections.forEach((section) => {
			observer.observe(section)
		})

		// Cleanup function
		return () => {
			observer.disconnect()
			document.body.style.overflow = ''
		}
	})

</script>

<style>
	:global(html) {
		scroll-behavior: smooth;
	}
	:global(body) {
		font-family: 'Figtree', sans-serif;
		background-color: #181818;
		color: #1f2937;
		-webkit-font-smoothing: antialiased;
		-moz-osx-font-smoothing: grayscale;
		position: relative;
	}
	:global(.gradient-text) {
		background: linear-gradient(
          to right,
          #5878e8,
          #3f5fdd
        );
		-webkit-background-clip: text;
		-webkit-text-fill-color: transparent;
		background-clip: text;
	}
	:global(.fade-in-section) {
		opacity: 0;
		transform: translateY(20px);
		transition: opacity 0.6s ease-out, transform 0.6s ease-out;
	}
	:global(.fade-in-section.is-visible) {
		opacity: 1;
		transform: translateY(0);
	}

</style>

<main id="main-content" aria-label="Main content" class="relative">
	<HeroSection />
	<FindingTeamSection />
	<ExternalTeamSection />
	<ProductComplexitySection />
	<ProvenProcessSection />
	<PartnerSearchSection />

</main>

<ContactForm />
