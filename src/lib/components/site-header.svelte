<script>
	import DarkIsologo from '$lib/assets/dark_isologo.webp'
	import LightIsologo from '$lib/assets/light_isologo.webp'
</script>

<!-- Minimalist Header -->
<header class="bg-gray-200 border-b border-gray-300 dark:bg-gray-900 dark:border-gray-700">
	<div class="px-4 py-3 mx-auto max-w-7xl sm:px-6 sm:py-4 lg:px-8">
		<div class="flex items-center justify-between">
			<!-- Logo -->
			<div class="flex-shrink-0">
				<img
					src={LightIsologo}
					alt="StackIt logo"
					loading="lazy"
					class="block w-auto h-6 sm:h-8 lg:h-10 dark:hidden"
				/>
				<img
					src={DarkIsologo}
					alt="StackIt logo (dark)"
					loading="lazy"
					class="hidden w-auto h-6 sm:h-8 lg:h-10 dark:block"
				/>
			</div>			<!-- Menu Button -->
			<button
				type="button"
				class="flex items-center justify-center w-8 h-8 transition-colors duration-200 border border-gray-300 rounded-md sm:h-10 sm:w-10 lg:h-12 lg:w-12 dark:border-gray-600 hover:bg-gray-100 dark:hover:bg-gray-800"
				aria-label="Menu"
			>
				<svg
					class="w-4 h-4 text-gray-600 sm:h-5 sm:w-5 lg:h-6 lg:w-6 dark:text-gray-300"
					fill="none"
					stroke="currentColor"
					viewBox="0 0 24 24"
				>
					<path
						stroke-linecap="round"
						stroke-linejoin="round"
						stroke-width="2"
						d="M4 6h16M4 12h16M4 18h16"
					/>
				</svg>
			</button>
		</div>
	</div>
</header>
