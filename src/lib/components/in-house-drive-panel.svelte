<script lang="ts">
	import { uiStore, openContactPanel } from '$lib/stores/ui.store.svelte'
	import stackitLogoSolidBlack from '$lib/assets/stackit-logo-black-solid.webp'

	function closeInHouseDrivePanel() {
		uiStore.isInHouseDrivePanelOpen = false
		// Only restore body overflow if no other panels are open
		if (!uiStore.isContactPanelOpen) {
			document.body.style.overflow = ''
		}
	}

	function handleContactCall() {
		setTimeout(() => {
			openContactPanel()
		}, 100)
	}
</script>

<div class="fixed inset-0 z-[9999] bg-white transform transition-transform duration-500 ease-in-out overflow-y-auto {uiStore.isInHouseDrivePanelOpen ? 'translate-x-0' : 'translate-x-full'}">
	<div class="relative h-full">
		<!-- Header -->
		<header class="sticky top-0 left-0 right-0 z-50 bg-white border-b border-gray-200">
			<div class="container flex items-center justify-between px-6 py-4 mx-auto">
				<img
					src={stackitLogoSolidBlack}
					alt="Stackit Logo"
					class="w-auto h-8 sm:h-8"
				/>
				<button
					aria-label="Close panel"
					onclick={closeInHouseDrivePanel}
					class="text-gray-500 hover:text-black transition-colors"
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
		</header>

		<!-- Content -->
		<main>
			<section class="pt-20 pb-20 md:pt-12 md:pb-32 bg-gray-50 relative">
				<div class="container mx-auto px-6">
					<div class="max-w-4xl mx-auto text-gray-700 space-y-8">
						<h2 class="flex border-gray-500 border-b-2 pb-10 text-4xl md:text-5xl font-bold text-black leading-tight mb-12 fade-in-section">
							Our In-House Drive
						</h2>
						<p class="text-3xl font-light fade-in-section">
							At Stackit, we know you're the kind of leader committed to
							transforming a great idea into an extraordinary software product. To
							do that, you need a highly professional, specialized team that acts
							as a true partner in bringing your vision to life.
						</p>
						<p class="text-lg fade-in-section">
							<strong>But there's a problem:</strong> finding a capable dev partner
							is harder than it should be. Choosing the wrong one too often leads to
							development chaos. Instead of leading, you're left managing misaligned
							teams, frustrated by a search that wastes time and drains energy. We
							believe businesses shouldn't have to struggle when they want to build
							an exceptional product with external help.
						</p>
						<p class="text-lg fade-in-section">
							We understand the frustration you feel when new growth opportunities
							are strained by a lack of quality and the stress of having to
							micromanage instead of lead. We genuinely share your concern about
							wasting precious time and money, especially when finding the right
							partner feels like such a high-stakes challenge. That's why we built
							our company to operate with the drive of an in-house team, combining
							rigorous engineering discipline with the obsessive collaboration of
							a true partner.
						</p>
						<p class="text-lg fade-in-section">
							Our path forward is designed to be clear and straightforward. It
							begins with an introduction call to understand your vision and
							strategic goals. From there, we present a tailored game plan that
							provides a comprehensive roadmap for success. Once you approve, our
							team integrates seamlessly with yours, allowing you to build with
							confidence as you watch your vision manifest in a steady,
							predictable rhythm of progress.
						</p>
						<div>
							<p class="text-lg">
								So, schedule an introduction call today. You can stop being
								drained by constant team oversight and start building the
								extraordinary software your vision demands.
							</p>
							<div class="mt-20 flex flex-col sm:flex-row-reverse items-center justify-between gap-6">
								<button
									onclick={handleContactCall}
									class="whitespace-nowrap bg-[#3F5FDD] text-white font-semibold px-12 py-4 text-lg sm:px-24 sm:py-6 sm:text-xl hover:bg-[#3550B8] transition-colors duration-300 inline-block w-full md:w-auto rounded-lg text-center"
								>Introduction Call</button>
								<button
									onclick={closeInHouseDrivePanel}
									class="text-lg font-semibold whitespace-nowrap text-gray-600 hover:text-black transition-colors duration-300 group"
								>
									<span class="inline-block transition-transform duration-300 group-hover:-translate-x-2">&larr;</span>
									Back to Home
								</button>
							</div>
						</div>
					</div>
				</div>
			</section>
		</main>
	</div>
</div>

<!-- Background overlay - hidden when contact panel is open -->
<button
	aria-label="Close in-house drive panel"
	class="fixed inset-0 z-[9998] bg-black transition-opacity duration-500 ease-in-out {uiStore.isInHouseDrivePanelOpen && !uiStore.isContactPanelOpen ? 'opacity-75' : 'opacity-0 hidden'}"
	onclick={closeInHouseDrivePanel}
></button>