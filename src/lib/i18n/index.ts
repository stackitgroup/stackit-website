import { getLocale, setLocale as setParaglideLocale, locales } from '$lib/paraglide/runtime'
import { m } from '$lib/paraglide/messages.js'
import { getLocaleDisplayName } from './utils'

// Re-export for cleaner imports
export { m as messages, locales }
export { useTranslations, t } from './translations'
export * from './utils'

// Create a reactive store for the current locale
import { writable, derived, readonly } from 'svelte/store'

const _locale = writable(getLocale())

// Update Paraglide when our store changes
_locale.subscribe((locale) => {
	if (locale !== getLocale()) {
		setParaglideLocale(locale)
	}
})

export const locale = readonly(_locale)

// Helper function to change locale
export const setLocale = (newLocale: typeof locales[number]) => {
	_locale.set(newLocale)
}

// Derived store for locale-specific data
export const localeInfo = derived(locale, $locale => ({
	code: $locale,
	isRTL: false, // Add RTL support when needed
	name: getLocaleDisplayName($locale)
}))
