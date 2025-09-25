<script lang="ts">
	import { browser } from '$app/environment'
	import { page } from '$app/state'
	import { PUBLIC_GA_ID } from '$env/static/public'
	import favicon from '$lib/assets/favicon.ico'
	import SiteFooter from '$lib/components/site-footer.svelte'
	import { tick } from 'svelte'
	import { Toaster } from 'svelte-sonner'
	import '../app.css'

	let { children } = $props()

	// --- UPDATED SEO metadata ---
	const siteTitle
		= 'Stackit | Helping high-growth leaders innovate at speed with the discipline & collaboration of an in-house team'
	const siteDescription
		= 'Build extraordinary software with a partner who shares your standards. Stackit provides an external development team with in-house drive and dedication.'
	const siteUrl = 'https://www.stackitgroup.com' // Using the final production URL
	const siteName = 'Stackit'
	const socialImage = `${siteUrl}/stackit-logo-social-media-b.png`
	const keywords
		= 'SaaS development services, custom software development, software for mid-sized companies, strategic software partner, external development team, custom software, web development, digital solutions, tech consulting'

	$effect(() => {
		if (browser && PUBLIC_GA_ID) {
			if (typeof window.gtag === 'function') {
				window.gtag('config', PUBLIC_GA_ID, {
					page_path: page.url.pathname
				})
			}
		}
	})

	$effect(() => {
		if (!browser) return
		void page.url.pathname
		let observer: IntersectionObserver | null = null;
		(async () => {
			await tick()
			const sections = document.querySelectorAll('.fade-in-section')
			sections.forEach(s => s.classList.remove('is-visible'))
			observer = new IntersectionObserver(
				(entries) => {
					entries.forEach((entry) => {
						if (entry.isIntersecting) {
							entry.target.classList.add('is-visible')
						}
					})
				},
				{ threshold: 0.1 }
			)
			sections.forEach((section) => {
				observer?.observe(section)
			})
		})()
		return () => {
			if (observer) observer.disconnect()
			document.body.style.overflow = ''
		}
	})
</script>

<svelte:head>
	{#if PUBLIC_GA_ID}
		<script
			async
			src="https://www.googletagmanager.com/gtag/js?id={PUBLIC_GA_ID}"
		></script>
		<script>
			window.dataLayer = window.dataLayer || [];
			function gtag() {
			dataLayer.push(arguments);
			}
			gtag('js', new Date());
		</script>
	{/if}

	<title>{siteTitle}</title>
	<meta name="description" content={siteDescription} />
	<meta name="keywords" content={keywords} />
	<meta name="author" content="Stackit Group" />
	<meta name="robots" content="index, follow" />
	<link rel="canonical" href={`${siteUrl}${page.url.pathname}`} />

	<meta property="og:type" content="website" />
	<meta property="og:url" content={`${siteUrl}${page.url.pathname}`} />
	<meta property="og:title" content={siteTitle} />
	<meta property="og:description" content={siteDescription} />
	<meta property="og:site_name" content={siteName} />
	<meta property="og:locale" content="en_US" />
	<meta property="og:image" content={socialImage} />
	<meta property="og:image:width" content="1200" />
	<meta property="og:image:height" content="630" />
	<meta
		property="og:image:alt"
		content="Stackit - Your External Dev Team with In-House Drive"
	/>

	<meta name="twitter:card" content="summary_large_image" />
	<meta name="twitter:site" content="@stackitgroup" />
	<meta name="twitter:url" content={`${siteUrl}${page.url.pathname}`} />
	<meta name="twitter:title" content={siteTitle} />
	<meta name="twitter:description" content={siteDescription} />
	<meta name="twitter:image" content={socialImage} />
	<meta
		name="twitter:image:alt"
		content="Stackit - Your External Dev Team with In-House Drive"
	/>

	<link rel="icon" type="image/x-icon" href={favicon} />
	<link rel="apple-touch-icon" href={favicon} />

	<link rel="preconnect" href="https://fonts.googleapis.com" />
	<link
		rel="preconnect"
		href="https://fonts.gstatic.com"
		crossorigin="anonymous"
	/>
	<link
		href="https://fonts.googleapis.com/css2?family=Figtree:wght@400;500;600;700;900&display=swap"
		rel="stylesheet"
	/>

	<meta name="format-detection" content="telephone=no" />
	<meta name="theme-color" content="#3F5FDD" />

	<script type="application/ld+json">
		{JSON.stringify({
		'@context': 'https://schema.org',
		'@type': 'Organization',
		name: siteName,
		url: 'https://www.stackitgroup.com',
		logo: 'https://www.stackitgroup.com/stackit_logo_solid_white.webp',
		description: 'Stackit is a software development agency that builds extraordinary software with an external development team that shares your standards.',
		contactPoint: {
		'@type': 'ContactPoint',
		telephone: '+1-619-917-5387',
		contactType: 'Sales',
		email: 'hello@stackitgroup.com'
		},
		sameAs: ['https://www.linkedin.com/company/stackit/'],
		brand: {
		'@type': 'Brand',
		name: siteName,
		description: 'External Dev Team with In-House Drive'
		},
		services: [
		{
		'@type': 'Service',
		name: 'SaaS Development Services',
		description: 'Tailored SaaS solutions from concept to launch and beyond.'
		},
		{
		'@type': 'Service',
		name: 'Custom Software Development',
		description: 'Building unique software applications to meet specific business needs.'
		},
		{
		'@type': 'Service',
		name: 'Web Development',
		description: 'Creating robust and scalable web applications.'
		},
		{
		'@type': 'Service',
		name: 'Strategic Software Partnership',
		description: 'Providing long-term development and strategic guidance as your in-house partner.'
		}
		]
		})}
	</script>
</svelte:head>

{@render children?.()}
<SiteFooter />
<Toaster />
