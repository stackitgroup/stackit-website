<script lang="ts">
	let isExpanded = false
	let expandedContent: HTMLElement
	let headerElement
	let contentHeight = '0px'
	let partnerSearchSection: HTMLElement

// const toggleContent = (shouldScroll = false) => {
	// 	if (!expandedContent) return

	// 	if (!isExpanded) {
	// 		// EXPANDING: Set height to scrollHeight for smooth animation
	// 		contentHeight = expandedContent.scrollHeight + 'px'
	// 		isExpanded = true

	// 		if (shouldScroll) {
	// 			// Wait for the DOM to update and transition to start
	// 			setTimeout(() => {
	// 				scrollToExpandedContent()
	// 			}, 300) // 300ms delay
	// 		}
	// 	}
	// 	else {
	// 		// COLLAPSING: Set height to 0 for smooth animation
	// 		contentHeight = '0px'
	// 		isExpanded = false

	// 		// Wait for collapse animation to complete, then scroll to "Continue reading" button
	// 		setTimeout(() => {
	// 			scrollToPartnerSearchSection()
	// 		}, 700) // 700ms matches the transition duration
	// 	}
	// }

	// const scrollToExpandedContent = () => {
	// 	if (!expandedContent) return

	// 	// Calculate header height dynamically
	// 	const headerEl = headerElement || document.getElementById('header') || document.querySelector('header')
	// 	const headerHeight = headerEl ? headerEl.offsetHeight : 0
	// 	// Small extra offset so content isn't pressed against the header
	// 	const extraOffset = 12
	// 	// Compute absolute Y coordinate of the expanded content
	// 	const rect = expandedContent.getBoundingClientRect()
	// 	const targetY = window.pageYOffset + rect.top - headerHeight - extraOffset
	// 	window.scrollTo({ top: targetY, behavior: 'smooth' })
	// }

	// const scrollToPartnerSearchSection = () => {
	// 	if (!partnerSearchSection) return

	// 	// Calculate header height dynamically
	// 	const headerEl = headerElement || document.getElementById('header') || document.querySelector('header')
	// 	const headerHeight = headerEl ? headerEl.offsetHeight : 0
	// 	// Small extra offset so button isn't pressed against the header
	// 	const extraOffset = 12
	// 	// Compute absolute Y coordinate of the "Continue reading" button
	// 	const rect = partnerSearchSection.getBoundingClientRect()
	// 	const targetY = window.pageYOffset + rect.top - headerHeight - extraOffset
	// 	window.scrollTo({ top: targetY, behavior: 'smooth' })
	// }

	// const handleReadMore = () => toggleContent(true)
	// const handleClose = () => toggleContent(false)
</script>

<!-- <section

	bind:this={partnerSearchSection}
	id="partner-search-section"
	class="flex items-center min-h-screen py-20 text-white md:py-32"
	style="
		background: linear-gradient(to bottom, #000000, #0a1a6260, #000000);
	"
>
	<div class="container px-6 mx-auto">
		<div class="max-w-3xl mx-auto text-left">
			<h2 class="text-4xl font-bold sm:text-5xl md:text-6xl lg:text-7xl fade-in-section">
				The partner you've been searching for...

			</h2>
			<p
				class="mt-8 text-xl text-gray-200 fade-in-section"
				style="transition-delay: 100ms"
			>
				The search for a capable dev partner shouldn't end in frustration
				and chaos. We've designed a clear path for leaders who are ready
				to stop micromanaging and start building the extraordinary
				software their vision demands.
			</p>

			<div class="mt-8 fade-in-section" style="transition-delay: 200ms">
				<button
					bind:this={partnerSearchSection}
					on:click={handleReadMore}
					class="text-[#99C4FE] text-xl font-semibold hover:underline transition-all duration-300"
				>
					Continue reading...
				</button>
			</div>
		</div>
	</div>
</section> -->

<!-- <section
  bind:this={expandedContent}
  class="overflow-hidden text-gray-800 transition-all duration-700 ease-in-out bg-white"
  style:max-height={contentHeight}
>

  <div class="container relative px-6 py-6 mx-auto md:py-24">
    <div class="flex items-start justify-between mb-12 md:items-center">

      <h2 class="pr-12 text-3xl font-bold text-gray-900 md:text-4xl md:pr-0">
        A Clear Path to Extraordinary Software
      </h2>
      <button
        on:click={handleClose}
        class="absolute text-gray-500 transition-colors top-6 right-6 md:static hover:text-gray-900"
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

    <div class="grid text-lg leading-relaxed md:grid-cols-2 gap-x-12 gap-y-8">
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

        <div class="justify-center hidden w-full md:flex">
          <a
            href="#contact"
            class="flex items-center justify-center w-3/6 bg-[#3F5FDD] text-white font-semibold px-12 py-4 text-lg sm:px-24 sm:py-6 sm:text-xl hover:bg-[#3550B8] transition-colors duration-300 rounded-lg"
            >Let's talk</a
          >
        </div>
      </div>
    </div>

    <div class="mt-12 text-center md:hidden">
      <a
        href="#contact"
        class="inline-flex items-center justify-center w-full sm:w-auto bg-[#3F5FDD] text-white font-semibold px-12 py-4 text-lg sm:px-24 sm:py-6 sm:text-xl hover:bg-[#3550B8] transition-colors duration-300 rounded-lg"
        >Let's talk</a
      >
    </div>
  </div>
</section>  -->

<section
	id="partner-section"
	class="py-20 md:py-32"
	style="background: linear-gradient(to bottom, #000000, #0a1a6260, #000000);"
>
	<div class="container px-6 mx-auto text-center">
		<div class="max-w-4xl mx-auto fade-in-section">
			<h2 class="mb-8 text-5xl font-bold text-white md:text-6xl">
				The Partner You've Been Searching For...
			</h2>
			<p class="mb-12 text-xl text-gray-300">
				The search for a capable dev partner shouldn't end in frustration and chaos. We've designed a clear path for leaders who are ready to stop micromanaging and start building the extraordinary software their vision demands.
			</p>
			<div class="flex flex-col items-center justify-center gap-6 sm:flex-row">
				<a href="#contact" class="bg-[#3F5FDD] whitespace-nowrap text-white text-center font-semibold px-12 py-4 text-lg sm:px-24 sm:py-6 sm:text-xl hover:bg-[#3550B8] transition-colors duration-300 inline-block w-full md:w-auto rounded-lg">Get Started</a>
				<a href="/partnership" class="bg-transparent  whitespace-nowrap border-2 border-[#3F5FDD] text-white font-semibold px-12 py-4 text-lg sm:px-24 sm:py-6 hover:bg-[#3550B8] transition-colors duration-300 sm:text-xl inline-block w-full md:w-auto rounded-lg">Read More</a>
			</div>
		</div>
	</div>
</section>
