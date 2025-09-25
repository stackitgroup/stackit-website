<script>
	import { openContactPanel } from '$lib/stores/ui.store.svelte'

</script>
<section class="flex items-center bg-black min-h-dvh is-visible">
	<div class="container px-6 mx-auto text-center">
		<div class="max-w-5xl mx-auto">
			<h1 class="mb-6 text-4xl font-black leading-tight text-white sm:text-5xl md:text-6xl lg:text-7xl fade-in-section">
				Your External Dev Team with
				<span class="gradient-text">In-House Drive</span>
			</h1>
			<p
				class="max-w-4xl mx-auto text-xl text-gray-300 sm:text-2xl md:text-3xl fade-in-section"
				style="transition-delay: 150ms">
				Build extraordinary software with a partner who shares your
				standards
			</p>

			<div class="mt-16 text-center fade-in-section">
				<button
					onclick={openContactPanel}
					class="bg-[#3F5FDD] text-white font-semibold px-12 py-4 text-lg sm:px-24 sm:py-6 sm:text-xl hover:bg-[#3550B8] transition-colors duration-300 inline-block  w-full md:w-auto rounded-lg">
					Get Started
				</button>
			</div>
		</div>
	</div>
</section>
