<script lang="ts">
	import { useTranslations, locale, localeInfo, setLocale, getBrowserLocale } from '$lib/i18n'
	import LanguageSwitcher from './language-switcher.svelte'

	const t = useTranslations()

	// Example of programmatic locale detection and setting
	function detectAndSetBrowserLocale() {
		const browserLocale = getBrowserLocale()
		setLocale(browserLocale)
	}
</script>

<div class="max-w-3xl mx-auto p-8">
	<h2 class="text-2xl text-slate-800 border-b-2 border-sky-500 pb-2">Enhanced i18n Demo</h2>

	<div class="mt-6 p-4 border rounded bg-slate-50">
		<p class="text-sm"><strong>Current locale:</strong> {$locale}</p>
		<p class="text-sm"><strong>Language name:</strong> {$localeInfo.name}</p>
		<p class="text-sm"><strong>Is RTL:</strong> {$localeInfo.isRTL ? 'Yes' : 'No'}</p>
	</div>

	<div class="mt-6 p-4 border rounded bg-slate-50">
		<h3 class="text-lg text-slate-700">Translation Examples</h3>
		<p class="mt-2">{t.hello_world({ name: 'Developer' })}</p>
		<p class="mt-2 text-sm text-slate-600">Safe translation: {t.maybe('hello_world', { name: 'Safe User' }, 'Fallback message')}</p>
	</div>

	<div class="mt-6 p-4 border rounded bg-slate-50">
		<h3 class="text-lg text-slate-700">Language Switching</h3>

		<div class="mt-3 space-y-3">
			<div>
				<h4 class="text-sm text-slate-600 mb-2">Different Variants:</h4>
				<div class="flex items-center gap-3">
					<LanguageSwitcher variant="buttons" />
					<LanguageSwitcher variant="select" />
					<LanguageSwitcher variant="minimal" />
				</div>
			</div>

			<div>
				<h4 class="text-sm text-slate-600 mb-2">Programmatic Control:</h4>
				<button on:click={detectAndSetBrowserLocale} class="px-4 py-2 bg-sky-600 text-white rounded hover:bg-sky-700">Detect & Set Browser Locale</button>
			</div>
		</div>
	</div>
</div>
