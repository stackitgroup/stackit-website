<script lang="ts">
  import ContactForm from "$lib/components/contact-form.svelte";
  import { onMount } from "svelte";

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
  :global(body) {
    font-family: 'Figtree', sans-serif;
  }
  .gradient-text {
    background: linear-gradient(to right, #2F5CEC, #587CFE);
    -webkit-background-clip: text;
    -webkit-text-fill-color: transparent;
  }
  .fade-in-section {
    opacity: 0;
    transform: translateY(20px);
    transition: opacity 0.6s ease-out, transform 0.6s ease-out;
  }
  .fade-in-section.is-visible {
    opacity: 1;
    transform: translateY(0);
  }
</style>

<main>
  <section class="pt-20 pb-20 md:pt-32 md:pb-32 bg-black relative">
    <!-- <a href="/#partner-section" class="fixed top-6 right-6 text-gray-400 hover:text-white transition-colors z-50">
      <svg class="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M6 18L18 6M6 6l12 12"></path></svg>
    </a> -->
    <div class="container mx-auto px-6">
      <div class="max-w-4xl mx-auto text-gray-300 space-y-8">
        <h1 class="text-4xl md:text-5xl font-bold text-white leading-tight mb-12 fade-in-section">
          The Partner You've Been Searching For...
        </h1>
        <p class="text-lg md:text-xl text-gray-200 fade-in-section" style="transition-delay: 150ms;">
          The search for a capable dev partner shouldn't end in frustration and chaos. We've designed a clear path for leaders who are ready to stop micromanaging and start building the extraordinary software their vision demands.
        </p>
        <p class="text-lg fade-in-section" style="transition-delay: 300ms;">
          At Stackit, we know you’re the kind of leader committed to transforming a great idea into an extraordinary software product. To do that, you need a highly professional, specialized team that acts as a true partner in bringing your vision to life.
        </p>
        <p class="text-lg fade-in-section" style="transition-delay: 450ms;">
          But there’s a problem: finding a capable dev partner is harder than it should be. Choosing the wrong one too often leads to Development Chaos. Instead of leading, you’re left managing misaligned teams, frustrated by a search that wastes time and drains energy. We believe businesses shouldn’t have to struggle when they want to build an exceptional product with external help.
        </p>
        <p class="text-lg fade-in-section" style="transition-delay: 600ms;">
          We understand the frustration you feel when new growth opportunities are strained by a lack of quality and the stress of having to micromanage instead of lead. We genuinely share your concern about wasting precious time and money, especially when finding the right partner feels like such a high-stakes challenge. That’s why we built our company to operate with the drive of an in-house team, combining rigorous engineering discipline with the obsessive collaboration of a true partner.
        </p>
        <p class="text-lg fade-in-section" style="transition-delay: 750ms;">
          Our path forward is designed to be clear and straightforward. It begins with an introduction call to understand your vision and strategic goals. From there, we present a tailored game plan that provides a comprehensive roadmap for success. Once you approve, our team integrates seamlessly with yours, allowing you to build with confidence as you watch your vision manifest in a steady, predictable rhythm of progress.
        </p>
        <div class="pt-8 fade-in-section" style="transition-delay: 900ms;">
          <p class="text-lg text-white font-semibold">
            So, schedule an introduction call today. You can stop being drained by constant team oversight and start building the extraordinary software your vision demands.
          </p>
          <div class="mt-8 flex flex-col sm:flex-row items-center justify-between gap-6">
            <a href="/#partner-section" class="text-lg font-semibold text-gray-300 hover:text-white transition-colors duration-300 group">
              <span class="inline-block transition-transform duration-300 group-hover:-translate-x-2">&larr;</span> Back to Home
            </a>
            <a href="#contact" class="bg-[#2F5CEC] text-white font-semibold px-12 py-4 hover:bg-[#234baf] transition-colors duration-300 text-lg inline-block rounded-xl">Let's Talk</a>
          </div>
        </div>
      </div>
    </div>
  </section>
</main>
<ContactForm />
