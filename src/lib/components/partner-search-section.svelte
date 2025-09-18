<script>
	import Typography from './typography.svelte'
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
