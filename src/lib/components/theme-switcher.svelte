<script lang="ts">
	import { theme, isDark } from '$lib/stores/theme'

	interface Props {
		variant?: 'button' | 'switch' | 'minimal'
		class?: string
	}

	let { variant = 'button', class: className = '' }: Props = $props()

	function toggleTheme() {
		theme.toggle()
	}
</script>

{#if variant === 'switch'}
	<!-- Toggle switch style -->
	<button
		onclick={toggleTheme}
		class="relative inline-flex h-6 w-11 items-center rounded-full transition-colors focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-offset-2 {$isDark ? 'bg-blue-600' : 'bg-gray-200'} {className}"
		role="switch"
		aria-checked={$isDark}
		aria-label="Toggle theme"
	>
		<span class="inline-block h-4 w-4 transform rounded-full bg-white transition-transform {$isDark ? 'translate-x-6' : 'translate-x-1'}"></span>
	</button>
{:else if variant === 'minimal'}
	<!-- Minimal icon-only button -->
	<button
		onclick={toggleTheme}
		class="p-2 rounded-md transition-colors hover:bg-gray-100 dark:hover:bg-gray-800 focus:outline-none focus:ring-2 focus:ring-blue-500 {className}"
		aria-label="Toggle theme"
	>
		{#if $isDark}
			<!-- Sun emoji for light mode -->
			<span class="text-lg">☀️</span>
		{:else}
			<!-- Moon emoji for dark mode -->
			<span class="text-lg">🌙</span>
		{/if}
	</button>
{:else}
	<!-- Default button style -->
	<button
		onclick={toggleTheme}
		class="inline-flex items-center gap-2 px-3 py-1.5 text-sm font-medium rounded-md border transition-colors focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-offset-2 {$isDark ? 'bg-gray-800 text-white border-gray-600 hover:bg-gray-700' : 'bg-white text-gray-900 border-gray-300 hover:bg-gray-50'} {className}"
		aria-label="Toggle theme"
	>
		{#if $isDark}
			<span class="text-base">☀️</span>
			<span>Light</span>
		{:else}
			<span class="text-base">🌙</span>
			<span>Dark</span>
		{/if}
	</button>
{/if}
