<script lang="ts">
	import ContactForm from '$lib/components/contact-form.svelte'
	import ExternalTeamSection from '$lib/components/external-team-section.svelte'
	import FindingTeamSection from '$lib/components/finding-team-section.svelte'
	import HeroSection from '$lib/components/hero-section.svelte'
	import PartnerSearchSection from '$lib/components/partner-search-section.svelte'
	import ProductComplexitySection from '$lib/components/product-complexity-section.svelte'
	import ProvenProcessSection from '$lib/components/proven-process-section.svelte'
	import { onMount } from 'svelte'

	onMount(() => {
		// Fade-in animations on scroll
		const sections = document.querySelectorAll('.fade-in-section')
		const observer = new IntersectionObserver((entries) => {
			entries.forEach((entry) => {
				if (entry.isIntersecting) {
					entry.target.classList.add('is-visible')
				}
			})
		}, { threshold: 0.1 })
		sections.forEach(section => observer.observe(section))

		// Contact panel functionality
		const contactPanel = document.getElementById('contact-panel')
		const overlay = document.getElementById('overlay')
		const closeBtn = document.getElementById('close-panel-btn')
		const openTriggers = document.querySelectorAll('a[href="#contact"]')

		function openPanel() {
			if (overlay && contactPanel) {
				overlay.classList.remove('hidden')
				contactPanel.classList.remove('hidden')
				document.documentElement.style.overflow = 'hidden'
				document.body.style.overflow = 'hidden'

				requestAnimationFrame(() => {
					overlay.classList.add('opacity-50')
					contactPanel.classList.remove('translate-x-full')
				})
			}
		}

		function closePanel() {
			if (overlay && contactPanel) {
				overlay.classList.remove('opacity-50')
				contactPanel.classList.add('translate-x-full')

				setTimeout(() => {
					overlay.classList.add('hidden')
					contactPanel.classList.add('hidden')
					document.documentElement.style.overflow = ''
					document.body.style.overflow = ''
				}, 500)
			}
		}

		// use named handlers so we can remove them later
		const openTriggerHandler = (e: Event) => {
			e.preventDefault()
			openPanel()
		}
		openTriggers.forEach((trigger) => {
			trigger.addEventListener('click', openTriggerHandler)
		})

		if (closeBtn) closeBtn.addEventListener('click', closePanel)
		if (overlay) overlay.addEventListener('click', closePanel)

		// Expandable Section Logic
		const readMoreBtn = document.getElementById('readMoreBtn')
		const expandedContent = document.getElementById('expandedContent')
		const closeContentBtn = document.getElementById('closeContentBtn')

		const toggleContent = (shouldScroll = false) => {
			if (!expandedContent) {
				return
			}

			if (expandedContent.style.maxHeight) {
				// COLLAPSE
				expandedContent.style.maxHeight = ''
				return
			}

			// EXPAND
			expandedContent.style.maxHeight = expandedContent.scrollHeight + 'px'
			if (shouldScroll) {
				setTimeout(() => {
					expandedContent.scrollIntoView({
						behavior: 'smooth',
						block: 'start'
					})
				}, 300)
			}
		}

		const readMoreHandler = () => toggleContent(true)
		const closeContentHandler = () => toggleContent(false)

		if (readMoreBtn) readMoreBtn.addEventListener('click', readMoreHandler)
		if (closeContentBtn) closeContentBtn.addEventListener('click', closeContentHandler)

		return () => {
			// disconnect observer to avoid leaks
			observer.disconnect()
			openTriggers.forEach((trigger) => {
				trigger.removeEventListener('click', openTriggerHandler)
			})
			if (closeBtn) closeBtn.removeEventListener('click', closePanel)
			if (overlay) overlay.removeEventListener('click', closePanel)
			// cleanup expandable listeners
			if (readMoreBtn) readMoreBtn.removeEventListener('click', readMoreHandler)
			if (closeContentBtn) closeContentBtn.removeEventListener('click', closeContentHandler)
		}
	})
</script>

<style>
	:global(html) {
		scroll-behavior: smooth;
		overflow-x: hidden;
	}
	:global(body) {
		font-family: 'Figtree', sans-serif;
		background-color: #181818;
		color: #1f2937;
		-webkit-font-smoothing: antialiased;
		-moz-osx-font-smoothing: grayscale;
		overflow-x: hidden;
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

<main id="main-content" aria-label="Main content">
	<HeroSection />
	<FindingTeamSection />
	<ExternalTeamSection />
	<ProductComplexitySection />
	<ProvenProcessSection />
	<PartnerSearchSection />

</main>

<ContactForm />
