<script>
	import ThemeSwitcher from './theme-switcher.svelte'
</script>

<!-- Header with semantic HTML -->
<header class="border-b border-gray-200 bg-white dark:border-gray-800 dark:bg-gray-900">

	<nav class="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8" aria-label="Main navigation">
		<div class="flex h-14 items-center justify-between sm:h-16">
			<!-- Logo -->
			<div class="flex-shrink-0">
				<div class="border border-gray-300 bg-gray-100 px-2 py-1 text-lg font-bold text-gray-900 dark:border-gray-600 dark:bg-gray-800 dark:text-white sm:px-3 sm:text-xl">
					StackIt Logo
				</div>
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
