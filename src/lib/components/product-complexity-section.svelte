<script>
	import AircuityLogo from '$lib/assets/aircuity-logo.webp'
	import I2SLLogo from '$lib/assets/i2sl-logo.webp'
	import SiemensLogo from '$lib/assets/siemens-logo.webp'
</script>

<section class="pt-20 md:py-32 bg-black min-h-dvh flex items-center">
	<div class="container mx-auto px-6">
		<div class="flex flex-col gap-6 md:grid md:grid-cols-2 md:gap-16 md:items-start">
			<div
				class="md:order-2 space-y-8 fade-in-section mt-6"
				style="transition-delay: 150ms"
			>
				<div class="flex items-start">
					<svg
						class="w-8 h-8 text-[#99C4FE] mr-4 mt-1 flex-shrink-0"
						fill="none"
						stroke="currentColor"
						viewBox="0 0 24 24"
						xmlns="http://www.w3.org/2000/svg"
					>
						<path
							stroke-linecap="round"
							stroke-linejoin="round"
							stroke-width="2"
							d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z"
						></path>
					</svg>
					<p class="text-lg md:text-xl text-gray-300">
						Our proven process brings structure and discipline to
						development, replacing chaos with
						<strong class="text-[#99C4FE]">clarity</strong>,
						<strong class="text-[#99C4FE]">predictability</strong>, and
						<strong class="text-[#99C4FE]">quality</strong>.
					</p>
				</div>
				<div class="flex items-start">
					<svg
						class="w-8 h-8 text-[#99C4FE] mr-4 mt-1 flex-shrink-0"
						fill="none"
						stroke="currentColor"
						viewBox="0 0 24 24"
						xmlns="http://www.w3.org/2000/svg"
					>
						<path
							stroke-linecap="round"
							stroke-linejoin="round"
							stroke-width="2"
							d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z"
						></path>
					</svg>
					<p class="text-lg md:text-xl text-gray-300">
						We make deep collaboration a priority, which does more than
						prevent misunderstandings—it builds the shared purpose and
						creative energy that define a winning team.
					</p>
				</div>
				<div class="flex items-start">
					<svg
						class="w-8 h-8 text-[#99C4FE] mr-4 mt-1 flex-shrink-0"
						fill="none"
						stroke="currentColor"
						viewBox="0 0 24 24"
						xmlns="http://www.w3.org/2000/svg"
					>
						<path
							stroke-linecap="round"
							stroke-linejoin="round"
							stroke-width="2"
							d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z"
						></path>
					</svg>
					<p class="text-lg md:text-xl text-gray-300">
						We're entrepreneurs at heart. We bring a deep personal stake
						to your project, transforming your vision into an
						extraordinary product.
					</p>
				</div>
			</div>
			<div class="order-first md:order-1 fade-in-section text-center md:text-left">
				<h2 class="text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-bold text-white leading-tight text-center md:text-left">
					We know that creating a great product is complicated
				</h2>
				<div class="text-left fade-in-section mt-16 md:inline-block hidden">
					<a
						href="#contact"
						class="bg-[#3F5FDD] text-white font-semibold px-12 py-4 text-lg sm:px-24 sm:py-6 sm:text-xl hover:bg-[#3550B8] transition-colors duration-300 w-full md:w-auto rounded-lg">Let's Talk</a>
				</div>
			</div>
		</div>

		<div class="mt-12 md:mt-20 fade-in-section">
			<div class="md:hidden text-center">
				<a
					href="#contact"
					class="bg-[#3F5FDD] text-white font-semibold px-12 py-4 sm:px-24 sm:py-6 sm:text-xl hover:bg-[#3550B8] transition-colors duration-300 text-xl inline-block rounded-lg w-full md:w-auto"
				>Let's Talk</a
				>
			</div>
			<div class="flex flex-wrap items-center justify-center gap-x-16 gap-y-8 mt-20">
				<a
					href="https://www.siemens.com/global/en.html"
					target="_blank"
					rel="noopener noreferrer"
				>
					<div class="h-14 w-44 flex items-center justify-center">
						<img
							src={SiemensLogo}
							alt="Siemens Logo"
							class="max-h-full max-w-full object-contain opacity-80 transition-all duration-300"
							style="filter: invert(1)"
						/>
					</div>
				</a>
				<a
					href="https://www.i2sl.org/"
					target="_blank"
					rel="noopener noreferrer"
				>
					<div class="h-14 w-44 flex items-center justify-center">
						<img
							src={I2SLLogo}
							alt="I2SL Logo"
							class="max-h-full max-w-full object-contain opacity-50 transition-all duration-300"
							style="filter: invert(1)"
						/>
					</div>
				</a>
				<a
					href="https://www.aircuity.com/"
					target="_blank"
					rel="noopener noreferrer"
				>
					<div class="h-14 w-44 flex items-center justify-center">
						<img
							src={AircuityLogo}
							alt="Aircuity Logo"
							class="max-h-full max-w-full object-contain opacity-80 transition-all duration-300"
							style="filter: invert(1)"
						/>
					</div>
				</a>
			</div>
		</div>
	</div>
</section>
