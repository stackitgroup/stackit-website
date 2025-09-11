<script>
	import ThemeSwitcher from './theme-switcher.svelte'
	import DarkIsologo from '$lib/assets/dark_isologo.webp'
	import LightIsologo from '$lib/assets/light_isologo.webp'
</script>

<!-- Header with semantic HTML -->
<header class="border-b border-gray-200 bg-white dark:border-gray-800 dark:bg-gray-900">

	<nav class="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8" aria-label="Main navigation">
		<div class="flex h-14 items-center justify-between sm:h-16">
			<!-- Logo -->
			<div class="flex-shrink-0">
				<!-- Use two images and toggle via dark: classes to avoid runtime JS swapping -->
				<img
					src={LightIsologo}
					alt="StackIt logo"
					loading="lazy"
					class="block h-8 w-auto dark:hidden sm:h-10"
				/>

				<img
					src={DarkIsologo}
					alt="StackIt logo (dark)"
					loading="lazy"
					class="hidden h-8 w-auto dark:block sm:h-10"
				/>

			</div>

			<!-- Actions -->
			<div class="flex items-center gap-3">
				<!-- Theme Switcher -->
				<ThemeSwitcher variant="minimal" />

				<!-- Introduction Call Button -->
				<button
					type="button"
					class="rounded border border-green-500 bg-transparent px-3 py-1.5 text-sm text-green-500 transition-colors duration-200 hover:bg-green-500 hover:text-white sm:px-4 sm:py-2 sm:text-base"
				>
					<span class="hidden sm:inline">Introduction Call</span>
					<span class="sm:hidden">Call</span>
				</button>
			</div>
		</div>
	</nav>
</header>
