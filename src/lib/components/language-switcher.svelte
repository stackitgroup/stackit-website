<script lang="ts">
	import { locale, setLocale, type Locale, getLocaleDisplayName, locales } from '$lib/i18n'

	interface Props {
		variant?: 'buttons' | 'select' | 'minimal'
		class?: string
	}

	let { variant = 'buttons', class: className = '' }: Props = $props()

	function handleLocaleChange(newLocale: string) {
		setLocale(newLocale as Locale)
	}

	const availableLocales = locales.map(code => ({
		code,
		name: getLocaleDisplayName(code)
	}))
</script>

{#if variant === 'select'}
	<select
		value={$locale}
		onchange={e => handleLocaleChange(e.currentTarget.value)}
		class="form-select px-3 py-2 border rounded bg-white text-sm {className}"
	>
		{#each availableLocales as { code, name } (code)}
			<option value={code}>{name}</option>
		{/each}
	</select>
{:else if variant === 'minimal'}
	<div class="flex items-center gap-2 {className}">
		{#each availableLocales as { code } (code)}
			<button
				type="button"
				onclick={() => handleLocaleChange(code)}
				class="px-2 py-1 text-sm rounded border transition-colors duration-150 focus:outline-none { $locale === code ? 'bg-sky-600 text-white border-sky-600' : 'bg-white text-gray-700 border-gray-300 hover:bg-gray-100' }"
			>
				{code.toUpperCase()}
			</button>
		{/each}
	</div>
{:else}
	<div class="flex items-center gap-2 {className}">
		{#each availableLocales as { code, name } (code)}
			<button
				type="button"
				onclick={() => handleLocaleChange(code)}
				class="px-3 py-1 text-sm rounded border transition-colors duration-150 focus:outline-none { $locale === code ? 'bg-sky-600 text-white border-sky-600' : 'bg-white text-gray-700 border-gray-300 hover:bg-gray-100' }"
			>
				{name}
			</button>
		{/each}
	</div>
{/if}
