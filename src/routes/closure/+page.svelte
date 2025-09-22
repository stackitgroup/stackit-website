<script lang="ts">
  import ContactForm from '$lib/components/contact-form.svelte';
</script>

<main>
  <section class="pt-12 pb-20 bg-gray-50">
    <div class="container mx-auto px-6 relative">
      <div class="max-w-4xl mx-auto text-gray-700 space-y-8">
        <!-- Breadcrumb Navigation -->
        <nav class="mb-12" aria-label="Breadcrumb">
          <ol
            class="flex items-center space-x-2 text-sm font-medium text-gray-500"
          >
            <li>
              <a href="/" class="hover:text-gray-900 transition-colors">Home</a>
            </li>
            <li>
              <svg
                class="w-4 h-4"
                fill="currentColor"
                viewBox="0 0 20 20"
                xmlns="http://www.w3.org/2000/svg"
                ><path
                  fill-rule="evenodd"
                  d="M7.293 14.707a1 1 0 010-1.414L10.586 10 7.293 6.707a1 1 0 011.414-1.414l4 4a1 1 0 010 1.414l-4 4a1 1 0 01-1.414 0z"
                  clip-rule="evenodd"
                ></path></svg
              >
            </li>
            <li>
              <a href="#" class="text-gray-800 underline" aria-current="page"
                >The partner you've been searching for...</a
              >
            </li>
          </ol>
        </nav>
        <h1
          class="text-4xl md:text-5xl font-bold text-black leading-tight mb-12 fade-in-section"
        >
          The Partner You've Been Searching For...
        </h1>
        <p class="text-lg md:text-xl text-gray-800 fade-in-section">
          The search for a capable dev partner shouldn't end in frustration and
          chaos. We've designed a clear path for leaders who are ready to stop
          micromanaging and start building the extraordinary software their
          vision demands.
        </p>
        <p class="text-lg fade-in-section">
          At Stackit, we know you’re the kind of leader committed to
          transforming a great idea into an extraordinary software product. To
          do that, you need a highly professional, specialized team that acts as
          a true partner in bringing your vision to life.
        </p>
        <p class="text-lg fade-in-section">
          But there’s a problem: finding a capable dev partner is harder than it
          should be. Choosing the wrong one too often leads to Development
          Chaos. Instead of leading, you’re left managing misaligned teams,
          frustrated by a search that wastes time and drains energy. We believe
          businesses shouldn’t have to struggle when they want to build an
          exceptional product with external help.
        </p>
        <p class="text-lg fade-in-section">
          We understand the frustration you feel when new growth opportunities
          are strained by a lack of quality and the stress of having to
          micromanage instead of lead. We genuinely share your concern about
          wasting precious time and money, especially when finding the right
          partner feels like such a high-stakes challenge. That’s why we built
          our company to operate with the drive of an in-house team, combining
          rigorous engineering discipline with the obsessive collaboration of a
          true partner.
        </p>
        <p class="text-lg fade-in-section">
          Our path forward is designed to be clear and straightforward. It
          begins with an introduction call to understand your vision and
          strategic goals. From there, we present a tailored game plan that
          provides a comprehensive roadmap for success. Once you approve, our
          team integrates seamlessly with yours, allowing you to build with
          confidence as you watch your vision manifest in a steady, predictable
          rhythm of progress.
        </p>
        <div>
          <p class="text-lg text-black font-semibold">
            So, schedule an introduction call today. You can stop being drained
            by constant team oversight and start building the extraordinary
            software your vision demands.
          </p>
          <div
            class="mt-8 flex flex-col sm:flex-row-reverse items-center justify-between gap-6"
          >
            <a
              href="#contact"
              class="whitespace-nowrap bg-[#3F5FDD] text-white font-semibold px-12 py-4 text-lg sm:px-24 sm:py-6 sm:text-xl hover:bg-[#3550B8] transition-colors duration-300 inline-block w-full md:w-auto rounded-lg text-center"
              >Introduction Call</a
            >
            <a
              href="javascript:history.back()"
              class="text-lg font-semibold text-gray-600 hover:text-black transition-colors duration-300 group"
            >
              <span
                class="inline-block transition-transform duration-300 group-hover:-translate-x-2"
                >&larr;</span
              >
              Back to Home
            </a>
          </div>
        </div>
      </div>
    </div>
  </section>
</main>
<ContactForm />
