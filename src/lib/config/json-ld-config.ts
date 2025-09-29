import type { OrganizationData, WebsiteData } from '../json-ld'

/**
 * Structured data configuration for StackIT
 */

export const STACKIT_ORGANIZATION: OrganizationData = {
	name: 'StackIT',
	url: 'https://stackit.group',
	logo: 'https://stackit.group/stackit-logo-black-solid.webp',
	description: 'StackIT is a consultancy specialized in software development and innovative technology solutions.',
	contactPoint: {
		contactType: 'Customer Service',
		email: 'contact@stackit.group'
	},
	sameAs: [
		// Add StackIT social media links here if they have them
		// 'https://linkedin.com/company/stackit',
		// 'https://twitter.com/stackit',
		// 'https://github.com/stackitgroup'
	]
}

export const STACKIT_WEBSITE: WebsiteData = {
	name: 'StackIT - Technology Solutions',
	url: 'https://stackit.group',
	description: 'Consultancy specialized in software development, external teams, and technology solutions for companies.',
	inLanguage: ['es', 'en']
}

/**
 * StackIT main services
 */
export const STACKIT_SERVICES = [
	{
		name: 'Software Development',
		description: 'Custom web and mobile application development using the latest technologies.',
		provider: {
			name: 'StackIT',
			url: 'https://stackit.group'
		},
		serviceType: 'Software Development',
		areaServed: ['Argentina', 'Latin America', 'Global']
	},
	{
		name: 'External Development Teams',
		description: 'Specialized development teams to enhance your technological capacity.',
		provider: {
			name: 'StackIT',
			url: 'https://stackit.group'
		},
		serviceType: 'IT Consulting',
		areaServed: ['Argentina', 'Latin America', 'Global']
	},
	{
		name: 'Technology Consulting',
		description: 'Specialized consulting in software architecture and technology strategy.',
		provider: {
			name: 'StackIT',
			url: 'https://stackit.group'
		},
		serviceType: 'Technology Consulting',
		areaServed: ['Argentina', 'Latin America', 'Global']
	}
]
