<script lang="ts">
	import favicon from '$lib/assets/stackit-isologo.webp'
	import SiteFooter from '$lib/components/site-footer.svelte'
	import SiteHeader from '$lib/components/site-header.svelte'
	import { Toaster } from 'svelte-sonner'
	import { page } from '$app/state'
	import '../app.css'
	import { browser } from '$app/environment'
	import { PUBLIC_GA_ID } from '$env/static/public'

	let { children } = $props()

	// SEO metadata
	const siteTitle = 'Stackit - Your External Dev Team with In-House Drive'
	const siteDescription = 'Build extraordinary software with Stackit, your external development team that shares your standards. We deliver high-quality software solutions with in-house dedication.'
	const siteUrl = 'https://stackitgroup.com'
	const siteName = 'Stackit'
	const keywords = 'external development team, software development, custom software, web development, mobile apps, digital solutions, tech consulting'

	// Usamos $effect para reaccionar a los cambios en la URL
	$effect(() => {
		// Solo corre en el navegador
		if (browser && PUBLIC_GA_ID) {
			// Asegúrate de que la función gtag() global exista antes de llamarla
			if (typeof window.gtag === 'function') {
				window.gtag('config', PUBLIC_GA_ID, {
					page_path: page.url.pathname
				})
			}
		}
	})

</script>

<svelte:head>
	<!-- Google tag (gtag.js) -->
	{#if PUBLIC_GA_ID}
		<script async src="https://www.googletagmanager.com/gtag/js?id={PUBLIC_GA_ID}"></script>
		<script>
			window.dataLayer = window.dataLayer || [];
			function gtag(){dataLayer.push(arguments);}
			gtag('js', new Date());
		</script>
	{/if}
	<!-- Basic SEO -->
	<title>{siteTitle}</title>
	<meta name="description" content={siteDescription} />
	<meta name="keywords" content={keywords} />
	<meta name="author" content="Stackit Group" />
	<meta name="robots" content="index, follow" />
	<link rel="canonical" href={`${siteUrl}${page.url.pathname}`} />

	<!-- Open Graph / Facebook -->
	<meta property="og:type" content="website" />
	<meta property="og:url" content={`${siteUrl}${page.url.pathname}`} />
	<meta property="og:title" content={siteTitle} />
	<meta property="og:description" content={siteDescription} />
	<meta property="og:site_name" content={siteName} />
	<meta property="og:locale" content="en_US" />
	<meta property="og:image" content={`${siteUrl}/og-image.jpg`} />
	<meta property="og:image:width" content="1200" />
	<meta property="og:image:height" content="630" />
	<meta property="og:image:alt" content="Stackit - Your External Dev Team with In-House Drive" />

	<!-- Twitter -->
	<meta name="twitter:card" content="summary_large_image" />
	<meta name="twitter:url" content={`${siteUrl}${page.url.pathname}`} />
	<meta name="twitter:title" content={siteTitle} />
	<meta name="twitter:description" content={siteDescription} />
	<meta name="twitter:image" content={`${siteUrl}/og-image.jpg`} />
	<meta name="twitter:image:alt" content="Stackit - Your External Dev Team with In-House Drive" />

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
		logo: `${siteUrl}/stackit-logo.webp`,
		contactPoint: {
		'@type': 'ContactPoint',
		contactType: 'customer service',
		availableLanguage: ['English', 'Spanish'],
		telephone: '+1-XXX-XXX-XXXX',
		email: 'contact@stackitgroup.com'
		},
		address: {
		'@type': 'PostalAddress',
		addressCountry: 'US'
		},
		foundingDate: '2020',
		numberOfEmployees: '10-50',
		industry: 'Software Development',
		sameAs: [
		'https://linkedin.com/company/stackit-group',
		'https://github.com/stackitgroup'
		]
		})}
	</script>
</svelte:head>

<SiteHeader />
{@render children?.()}
<SiteFooter />
<Toaster />
