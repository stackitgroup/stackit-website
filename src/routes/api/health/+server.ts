import { json } from '@sveltejs/kit'
import type { RequestHandler } from './$types'
import { ENVIRONMENT, npm_package_version } from '$env/static/private'

export const GET: RequestHandler = async () => {
	return json({
		status: 'healthy',
		version: npm_package_version,
		timestamp: new Date().toISOString(),
		service: 'stackit-website',
		environment: ENVIRONMENT || 'development'
	})
}
