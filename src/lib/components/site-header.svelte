<script>
	import DarkIsologo from '$lib/assets/dark_isologo.webp'
	import LightIsologo from '$lib/assets/light_isologo.webp'
</script>

<!-- Minimalist Header -->
<header class="bg-gray-200 dark:bg-gray-900">
	<div class="flex items-center justify-between px-4 py-4 sm:px-6">
		<!-- Logo -->
		<div class="flex-shrink-0">
			<img
				src={LightIsologo}
				alt="StackIt logo"
				loading="lazy"
				class="block h-8 w-auto dark:hidden"
			/>
			<img
				src={DarkIsologo}
				alt="StackIt logo (dark)"
				loading="lazy"
				class="hidden h-8 w-auto dark:block"
			/>
		</div>

		<!-- Menu Button -->
		<button
			type="button"
			class="flex h-10 w-10 items-center justify-center rounded border border-gray-300 dark:border-gray-600"
			aria-label="Menu"
		>
			<svg
				class="h-5 w-5 text-gray-600 dark:text-gray-300"
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
</header>
