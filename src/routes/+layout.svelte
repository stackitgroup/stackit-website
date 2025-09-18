<script lang="ts">
	import favicon from '$lib/assets/stackit-isologo.png'
	import SiteFooter from '$lib/components/site-footer.svelte'
	import SiteHeader from '$lib/components/site-header.svelte'
	import { Toaster } from 'svelte-sonner'
	import { page } from '$app/stores'
	import '../app.css'

	let { children } = $props()

	// SEO metadata
	const siteTitle = 'Stackit - Your External Dev Team with In-House Drive'
	const siteDescription = 'Build extraordinary software with Stackit, your external development team that shares your standards. We deliver high-quality software solutions with in-house dedication.'
	const siteUrl = 'https://stackitgroup.com'
	const siteName = 'Stackit'
	const keywords = 'external development team, software development, custom software, web development, mobile apps, digital solutions, tech consulting'

</script>

<svelte:head>
	<!-- Basic SEO -->
	<title>{siteTitle}</title>
	<meta name="description" content={siteDescription} />
	<meta name="keywords" content={keywords} />
	<meta name="author" content="Stackit Group" />
	<meta name="robots" content="index, follow" />
	<link rel="canonical" href={`${siteUrl}${$page.url.pathname}`} />

	<!-- Open Graph / Facebook -->
	<meta property="og:type" content="website" />
	<meta property="og:url" content={`${siteUrl}${$page.url.pathname}`} />
	<meta property="og:title" content={siteTitle} />
	<meta property="og:description" content={siteDescription} />
	<meta property="og:site_name" content={siteName} />
	<meta property="og:locale" content="en_US" />

	<!-- Twitter -->
	<meta name="twitter:card" content="summary_large_image" />
	<meta name="twitter:url" content={`${siteUrl}${$page.url.pathname}`} />
	<meta name="twitter:title" content={siteTitle} />
	<meta name="twitter:description" content={siteDescription} />

	<!-- Favicon and icons -->
	<link rel="icon" type="image/png" href={favicon} />
	<link rel="apple-touch-icon" href={favicon} />

	<!-- Preconnect for performance -->
	<link rel="preconnect" href="https://fonts.googleapis.com" />
	<link rel="preconnect" href="https://fonts.gstatic.com" crossorigin="anonymous" />
	<link href="https://fonts.googleapis.com/css2?family=Figtree:wght@400;500;600;700;900&display=swap" rel="stylesheet" />

	<!-- Additional meta for better performance -->
	<meta name="format-detection" content="telephone=no" />
	<meta name="theme-color" content="#3F5FDD" />

	<!-- Structured data for organization -->
	<script type="application/ld+json">
		{JSON.stringify({
		'@context': 'https://schema.org',
		'@type': 'Organization',
		name: 'Stackit Group',
		url: siteUrl,
		description: siteDescription,
		contactPoint: {
		'@type': 'ContactPoint',
		contactType: 'customer service',
		availableLanguage: ['English', 'Spanish']
		},
		sameAs: []
		})}
	</script>
</svelte:head>

<SiteHeader />
{@render children?.()}
<SiteFooter />
<Toaster />
