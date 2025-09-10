import { messages } from '$lib/i18n'

/**
 * A more ergonomic way to use translated messages
 * This provides better TypeScript support and cleaner syntax
 */
export const useTranslations = () => {
	return {
		// Direct access to all messages
		...messages,

		// Helper for conditional translations
		maybe: <T extends keyof typeof messages>(
			key: T,
			params?: Parameters<typeof messages[T]>[0],
			fallback?: string
		) => {
			try {
				return messages[key](params as Parameters<typeof messages[T]>[0])
			}
			catch {
				return fallback || `[${String(key)}]`
			}
		},

		// Helper for pluralization (can be extended)
		plural: (
			count: number,
			singular: string,
			plural: string
		) => {
			return count === 1 ? singular : plural
		}
	}
}

// For use in non-component contexts
export const t = useTranslations()
