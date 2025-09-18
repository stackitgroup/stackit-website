<script>
	import { onMount } from 'svelte'

	onMount(() => {
		const readMoreBtn = document.getElementById('readMoreBtn')
		const header = document.getElementById('header')
		const expandedContent = document.getElementById('expandedContent')
		const closeContentBtn = document.getElementById('closeContentBtn')

		const toggleContent = (shouldScroll = false) => {
			if (!expandedContent) return
			if (expandedContent.style.maxHeight) {
				// Action to COLLAPSE the section
				expandedContent.style.maxHeight = ''
			}
			else {
				// Action to EXPAND the section
				expandedContent.style.maxHeight = expandedContent.scrollHeight + 'px'
				if (shouldScroll) {
					// Wait a moment for the transition to start, then scroll
					setTimeout(() => {
						// Calculate header height dynamically (fallback to any <header> element)
						const headerEl = header || document.getElementById('header') || document.querySelector('header')
						const headerHeight = headerEl ? headerEl.offsetHeight : 0
						// small extra offset so content isn't pressed against the header
						const extraOffset = 12
						// Compute absolute Y coordinate of the expanded content
						const rect = expandedContent.getBoundingClientRect()
						const targetY = window.pageYOffset + rect.top - headerHeight - extraOffset
						window.scrollTo({ top: targetY, behavior: 'smooth' })
					}, 300) // 300ms delay
				}
			}
		}

		// When "Continue reading..." is clicked, expand and scroll
		if (readMoreBtn) readMoreBtn.addEventListener('click', () => toggleContent(true))

		// When the close button is clicked, collapse without scrolling
		if (closeContentBtn) closeContentBtn.addEventListener('click', () => toggleContent(false))

		// Cleanup function
		return () => {
			document.body.style.overflow = ''
		}
	})
</script>

<section
	class="min-h-screen flex items-center py-20 md:py-32 text-white"
	style="
		background: linear-gradient(to bottom, #000000, #0a1a6260, #000000);
	"
>
	<div class="container mx-auto px-6">
		<div class="max-w-3xl mx-auto text-left">
			<h2 class="text-5xl md:text-6xl font-bold fade-in-section">
				The partner you've been searching for...
			</h2>
			<p
				class="text-xl text-gray-200 mt-8 fade-in-section"
				style="transition-delay: 100ms"
			>
				The search for a capable dev partner shouldn't end in frustration
				and chaos. We've designed a clear path for leaders who are ready
				to stop micromanaging and start building the extraordinary
				software their vision demands.
			</p>

			<div class="mt-8 fade-in-section" style="transition-delay: 200ms">
				<button
					id="readMoreBtn"
					class="text-[#99C4FE] text-xl font-semibold hover:underline transition-all duration-300"
				>
					Continue reading...
				</button>
				<!-- <a
                class="text-[#99C4FE] text-xl font-semibold hover:underline transition-all duration-300"
                href="./partnertship.html"
              >
                Continue reading...</a
              > -->
			</div>
		</div>
	</div>
</section>

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

		<div class="grid md:grid-cols-2 gap-x-12 gap-y-8 text-lg leading-relaxed">
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

				<div class="w-full hidden md:flex justify-center">
					<a
						href="#contact"
						class="flex items-center justify-center w-3/6 bg-[#3F5FDD] text-white font-semibold px-10 py-5 hover:bg-[#3550B8] transition-colors duration-300 text-lg rounded-xl"
					>Let's talk</a
					>
				</div>
			</div>
		</div>

		<div class="mt-12 text-center md:hidden">
			<a
				href="#contact"
				class="inline-flex items-center justify-center w-full sm:w-auto bg-[#3F5FDD] text-white font-semibold px-12 py-5 hover:bg-[#3550B8] transition-colors duration-300 text-lg rounded-xl"
			>Let's talk</a
			>
		</div>
	</div>
</section>
