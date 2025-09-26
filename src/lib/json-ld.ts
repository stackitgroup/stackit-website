/**
 * Utilities for generating JSON-LD structured data
 */

export interface OrganizationData {
	name: string
	url: string
	logo?: string
	description?: string
	contactPoint?: {
		telephone?: string
		contactType?: string
		email?: string
	}
	sameAs?: string[]
	address?: {
		streetAddress?: string
		addressLocality?: string
		addressRegion?: string
		postalCode?: string
		addressCountry?: string
	}
}

export interface WebsiteData {
	name: string
	url: string
	description?: string
	inLanguage?: string[]
}

export interface ServiceData {
	name: string
	description: string
	provider: {
		name: string
		url: string
	}
	serviceType?: string
	areaServed?: string[]
}

export interface BreadcrumbItem {
	name: string
	url: string
}

/**
 * Generates structured data for organization
 */
export function generateOrganization(data: OrganizationData) {
	return {
		'@context': 'https://schema.org',
		'@type': 'Organization',
		'name': data.name,
		'url': data.url,
		...(data.logo && { logo: data.logo }),
		...(data.description && { description: data.description }),
		...(data.contactPoint && {
			contactPoint: {
				'@type': 'ContactPoint',
				...data.contactPoint
			}
		}),
		...(data.sameAs && { sameAs: data.sameAs }),
		...(data.address && {
			address: {
				'@type': 'PostalAddress',
				...data.address
			}
		})
	}
}

/**
 * Generates structured data for website
 */
export function generateWebsite(data: WebsiteData) {
	return {
		'@context': 'https://schema.org',
		'@type': 'WebSite',
		'name': data.name,
		'url': data.url,
		...(data.description && { description: data.description }),
		...(data.inLanguage && { inLanguage: data.inLanguage })
	}
}

/**
 * Generates structured data for services
 */
export function generateService(data: ServiceData) {
	return {
		'@context': 'https://schema.org',
		'@type': 'Service',
		'name': data.name,
		'description': data.description,
		'provider': {
			'@type': 'Organization',
			'name': data.provider.name,
			'url': data.provider.url
		},
		...(data.serviceType && { serviceType: data.serviceType }),
		...(data.areaServed && { areaServed: data.areaServed })
	}
}

/**
 * Generates structured breadcrumbs
 */
export function generateBreadcrumbs(items: BreadcrumbItem[]) {
	return {
		'@context': 'https://schema.org',
		'@type': 'BreadcrumbList',
		'itemListElement': items.map((item, index) => ({
			'@type': 'ListItem',
			'position': index + 1,
			'name': item.name,
			'item': item.url
		}))
	}
}

/**
 * Generates structured data for a specific web page
 */
export function generateWebPage(data: {
	name: string
	description?: string
	url: string
	isPartOf?: {
		name: string
		url: string
	}
	inLanguage?: string
	datePublished?: string
	dateModified?: string
}) {
	return {
		'@context': 'https://schema.org',
		'@type': 'WebPage',
		'name': data.name,
		'url': data.url,
		...(data.description && { description: data.description }),
		...(data.inLanguage && { inLanguage: data.inLanguage }),
		...(data.datePublished && { datePublished: data.datePublished }),
		...(data.dateModified && { dateModified: data.dateModified }),
		...(data.isPartOf && {
			isPartOf: {
				'@type': 'WebSite',
				'name': data.isPartOf.name,
				'url': data.isPartOf.url
			}
		})
	}
}

/**
 * Generates structured FAQ
 */
export function generateFAQ(faqs: Array<{ question: string, answer: string }>) {
	return {
		'@context': 'https://schema.org',
		'@type': 'FAQPage',
		'mainEntity': faqs.map(faq => ({
			'@type': 'Question',
			'name': faq.question,
			'acceptedAnswer': {
				'@type': 'Answer',
				'text': faq.answer
			}
		}))
	}
}
