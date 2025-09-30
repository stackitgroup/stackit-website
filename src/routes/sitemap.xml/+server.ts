import type { RequestHandler } from './$types'

export const GET: RequestHandler = async () => {
	const baseUrl = 'https://stackitgroup.com'
	const lastmod = new Date().toISOString().split('T')[0]

	const urls = [
		{
			loc: `${baseUrl}/`,
			lastmod,
			changefreq: 'weekly',
			priority: '1.0'
		},
		{
			loc: `${baseUrl}/demo/paraglide`,
			lastmod,
			changefreq: 'monthly',
			priority: '0.5'
		},
		{
			loc: `${baseUrl}/demo/theme`,
			lastmod,
			changefreq: 'monthly',
			priority: '0.5'
		}
	]

	const sitemap = `<?xml version="1.0" encoding="UTF-8"?>
<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9"
        xmlns:image="http://www.google.com/schemas/sitemap-image/1.1">
${urls.map(url => `	<url>
		<loc>${url.loc}</loc>
		<lastmod>${url.lastmod}</lastmod>
		<changefreq>${url.changefreq}</changefreq>
		<priority>${url.priority}</priority>
	</url>`).join('\n')}
</urlset>`

	return new Response(sitemap, {
		headers: {
			'Content-Type': 'application/xml'
		}
	})
}
