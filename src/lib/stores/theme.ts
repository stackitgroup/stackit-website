import { writable, derived, type Writable } from 'svelte/store'
import { browser } from '$app/environment'

export type Theme = 'light' | 'dark'

function updateDocumentClass(theme: Theme) {
	if (browser && typeof document !== 'undefined') {
		if (theme === 'dark') {
			document.documentElement.classList.add('dark')
		}
		else {
			document.documentElement.classList.remove('dark')
		}
	}
}

function createThemeStore(): Writable<Theme> & {
	toggle: () => void
} {
	// Always start with light theme
	const { subscribe, set, update } = writable<Theme>('light')

	return {
		subscribe,
		set: (value: Theme) => {
			set(value)
			updateDocumentClass(value)
			if (browser) {
				localStorage.setItem('theme', value)
			}
		},
		update,
		toggle: () => {
			update((current) => {
				const newTheme = current === 'light' ? 'dark' : 'light'
				updateDocumentClass(newTheme)
				if (browser) {
					localStorage.setItem('theme', newTheme)
				}
				return newTheme
			})
		}
	}
}

// Export the theme store
export const theme = createThemeStore()

// Derived stores for convenience
export const isDark = derived(theme, ($theme: Theme) => $theme === 'dark')
export const isLight = derived(theme, ($theme: Theme) => $theme === 'light')

// Theme classes helper for conditional styling
export const themeClasses = derived(theme, ($theme: Theme) => ({
	// Background classes
	bg: {
		primary: $theme === 'dark' ? 'bg-gray-900' : 'bg-white',
		secondary: $theme === 'dark' ? 'bg-gray-800' : 'bg-gray-50',
		tertiary: $theme === 'dark' ? 'bg-gray-700' : 'bg-gray-100'
	},
	// Text classes
	text: {
		primary: $theme === 'dark' ? 'text-white' : 'text-gray-900',
		secondary: $theme === 'dark' ? 'text-gray-300' : 'text-gray-600',
		muted: $theme === 'dark' ? 'text-gray-400' : 'text-gray-500'
	},
	// Border classes
	border: {
		primary: $theme === 'dark' ? 'border-gray-700' : 'border-gray-200',
		secondary: $theme === 'dark' ? 'border-gray-600' : 'border-gray-300'
	}
}))

// Sync store with localStorage on browser load
if (browser) {
	// Read from localStorage after DOM loads
	const stored = localStorage.getItem('theme')
	if (stored === 'dark') {
		theme.set('dark')
	}
	else {
		// Force light theme as default
		theme.set('light')
	}
}
