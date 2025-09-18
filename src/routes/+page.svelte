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

<main aria-label="Main content">
	<HeroSection />
	<FindingTeamSection />
	<ExternalTeamSection />
	<ProductComplexitySection />
	<ProvenProcessSection />
	<PartnerSearchSection />

	<section
		id="expandedContent"
		class="bg-white text-gray-800 transition-all duration-700 ease-in-out max-h-0 overflow-hidden"
	>
		<div class="container mx-auto px-6 py-20 md:py-24">
			<div class="flex justify-between items-center mb-12">
				<h2 class="text-3xl md:text-4xl font-bold text-gray-900">
					A Clear Path to Extraordinary Software
				</h2>
				<button
					id="closeContentBtn"
					class="text-gray-500 hover:text-gray-900 transition-colors"
					aria-label="Close expanded section"
				>
					<svg
						class="w-8 h-8"
						fill="none"
						stroke="currentColor"
						viewBox="0 0 24 24"
						xmlns="http://www.w3.org/2000/svg"
					>
						<path
							stroke-linecap="round"
							stroke-linejoin="round"
							stroke-width="2"
							d="M6 18L18 6M6 6l12 12"
						></path>
					</svg>
				</button>
			</div>
			<div class="grid md:grid-cols-2 gap-x-12 gap-y-8 text-lg leading-relaxed"
			>
				<div class="space-y-6">
					<p>
						At Stackit, we know you’re the kind of leader committed to
						transforming a great idea into an extraordinary software
						product. To do that, you need a highly professional, specialized
						team that acts as a true partner in bringing your vision to
						life.
					</p>
					<p>
						But there’s a problem: finding a capable dev partner is harder
						than it should be. Choosing the wrong one too often leads to
						Development Chaos. Instead of leading, you’re left managing
						misaligned teams, frustrated by a search that wastes time and
						drains energy. We believe businesses shouldn’t have to struggle
						when they want to build an exceptional product with external
						help.
					</p>
					<p>
						We understand the frustration you feel when new growth
						opportunities are strained by a lack of quality and the stress
						of having to micromanage instead of lead. We genuinely share
						your concern about wasting precious time and money, especially
						when finding the right partner feels like such a high-stakes
						challenge. That’s why we built our company to operate with the
						drive of an in-house team, combining rigorous engineering
						discipline with the obsessive collaboration of a true partner.
					</p>
				</div>
				<div class="space-y-6">
					<p>
						Our path forward is designed to be clear and straightforward. It
						begins with an introduction call to understand your vision and
						strategic goals. From there, we present a tailored game plan
						that provides a comprehensive roadmap for success. Once you
						approve, our team integrates seamlessly with yours, allowing you
						to build with confidence as you watch your vision manifest in a
						steady, predictable rhythm of progress.
					</p>
					<p>
						So, schedule an introduction call today. You can stop being
						drained by constant team oversight and start building the
						extraordinary software your vision demands.
					</p>
					<!-- <a
                href="#contact"
                class="text-center bg-[#3F5FDD] text-white font-semibold px-10 py-4 text-lg hover:bg-[#3550B8] transition-colors duration-300 inline-block rounded-xl"
                >Let's talk</a
              > -->
					<div class="w-full">
						<a
							href="#contact"
							class="flex items-center justify-center w-3/6 bg-[#3F5FDD] text-white font-semibold px-24 py-6 hover:bg-[#3550B8] transition-colors duration-300 text-xl rounded-2xl mx-auto"
						>Let's talk</a
						>
					</div>
				</div>
			</div>
		</div>
	</section>
</main>

<ContactForm />
