/**
 * Type-safe locale utilities
 */

import { locales } from '$lib/paraglide/runtime'

export type Locale = (typeof locales)[number]

export const isValidLocale = (locale: string): locale is Locale => {
	return locales.includes(locale as Locale)
}

export const getLocaleDisplayName = (locale: Locale): string => {
	const names: Record<Locale, string> = {
		en: 'English',
		es: 'Español'
	}
	return names[locale] || locale
}

export const getLocalizedPath = (path: string, locale: Locale): string => {
	if (locale === 'en') return path
	return `/${locale}${path === '/' ? '' : path}`
}

// Browser locale detection
export const getBrowserLocale = (): Locale => {
	if (typeof navigator === 'undefined') return 'en'

	const browserLang = navigator.language.split('-')[0]
	return isValidLocale(browserLang) ? browserLang : 'en'
}
