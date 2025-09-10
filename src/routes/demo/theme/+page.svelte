<script lang="ts">
	import ThemeSwitcher from '$lib/components/theme-switcher.svelte'
	import { theme, isDark, themeClasses } from '$lib/stores/theme'
</script>

<div class="min-h-screen {$themeClasses.bg.primary}">
	<div class="max-w-4xl mx-auto p-8">
		<div class="text-center mb-8">
			<h1 class="text-3xl font-bold {$themeClasses.text.primary} mb-4">
				Theme Switcher Demo
			</h1>
			<p class="{$themeClasses.text.secondary} mb-6">
				Test the light and dark theme implementation
			</p>
		</div>

		<!-- Theme Controls -->
		<div class="grid grid-cols-1 md:grid-cols-3 gap-6 mb-8">
			<div class="p-6 rounded-lg border {$themeClasses.bg.secondary} {$themeClasses.border.primary}">
				<h3 class="text-lg font-semibold {$themeClasses.text.primary} mb-3">Button Style</h3>
				<ThemeSwitcher variant="button" />
			</div>

			<div class="p-6 rounded-lg border {$themeClasses.bg.secondary} {$themeClasses.border.primary}">
				<h3 class="text-lg font-semibold {$themeClasses.text.primary} mb-3">Switch Style</h3>
				<ThemeSwitcher variant="switch" />
			</div>

			<div class="p-6 rounded-lg border {$themeClasses.bg.secondary} {$themeClasses.border.primary}">
				<h3 class="text-lg font-semibold {$themeClasses.text.primary} mb-3">Minimal Style</h3>
				<ThemeSwitcher variant="minimal" />
			</div>
		</div>

		<!-- Theme Info -->
		<div class="p-6 rounded-lg border {$themeClasses.bg.secondary} {$themeClasses.border.primary}">
			<h3 class="text-lg font-semibold {$themeClasses.text.primary} mb-4">Current Theme</h3>
			<div class="grid grid-cols-2 gap-4 text-sm">
				<div>
					<strong class={$themeClasses.text.primary}>Theme:</strong>
					<span class={$themeClasses.text.secondary}>{$theme}</span>
				</div>
				<div>
					<strong class={$themeClasses.text.primary}>Is Dark:</strong>
					<span class={$themeClasses.text.secondary}>{$isDark ? 'Yes' : 'No'}</span>
				</div>
			</div>
		</div>

		<!-- Features List -->
		<div class="mt-8 p-6 rounded-lg border {$themeClasses.bg.secondary} {$themeClasses.border.primary}">
			<h3 class="text-lg font-semibold {$themeClasses.text.primary} mb-4">Features</h3>
			<ul class="space-y-2 {$themeClasses.text.secondary}">
				<li>✅ Light theme as default</li>
				<li>✅ Reactive theme switching</li>
				<li>✅ Persistent theme preference (localStorage)</li>
				<li>✅ Smooth transitions</li>
				<li>✅ Multiple switcher variants</li>
				<li>✅ Accessibility support</li>
				<li>✅ Updated all major components</li>
			</ul>
		</div>
	</div>
</div>
