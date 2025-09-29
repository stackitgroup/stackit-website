<script lang="ts">
	import { browser } from '$app/environment'
	import { page } from '$app/state'
	import { PUBLIC_GA_ID } from '$env/static/public'
	import favicon from '$lib/assets/favicon.ico'
	import SiteFooter from '$lib/components/site-footer.svelte'
	import { tick } from 'svelte'
	import { Toaster } from 'svelte-sonner'
	import '../app.css'
	import ContactForm from '$lib/components/contact-form.svelte'
	import InHouseDrivePanel from '$lib/components/in-house-drive-panel.svelte'
	import JsonLd from '$lib/components/json-ld.svelte'
	import { generateOrganization, generateWebsite } from '$lib/json-ld'
	import { STACKIT_ORGANIZATION, STACKIT_WEBSITE } from '$lib/config/json-ld-config'

	interface LayoutData {
		version: string
	}

	let { children, data }: { children: any; data: LayoutData } = $props()

	// --- UPDATED SEO metadata ---
	const siteTitle
		= 'Stackit | Helping high-growth leaders innovate at speed with the discipline & collaboration of an in-house team'
	const siteDescription
		= 'Build extraordinary software with a partner who shares your standards. Stackit provides an external development team with in-house drive and dedication.'
	const siteUrl = page.url.origin
	const siteName = 'Stackit'
	const socialImage = `${siteUrl}/stackit-logo-social-media-b.png`
	const absoluteSocialImage = socialImage.startsWith('http') ? socialImage : `${siteUrl}${socialImage}`
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
	<meta name="version" content={data.version} />
	<link rel="canonical" href={`${siteUrl}${page.url.pathname}`} />

	<!-- Open Graph / Facebook -->
	<meta property="og:type" content="website" />
	<meta property="og:url" content={`${siteUrl}${page.url.pathname}`} />
	<meta property="og:title" content={siteTitle} />
	<meta property="og:description" content={siteDescription} />
	<meta property="og:site_name" content={siteName} />
	<meta property="og:locale" content="en_US" />
	<meta property="og:image" content={absoluteSocialImage} />
	<meta property="og:image:secure_url" content={absoluteSocialImage} />
	<meta property="og:image:type" content="image/png" />
	<meta property="og:image:width" content="1200" />
	<meta property="og:image:height" content="630" />
	<meta
		property="og:image:alt"
		content="Stackit - Your External Dev Team with In-House Drive"
	/>

	<!-- Twitter -->
	<meta name="twitter:card" content="summary_large_image" />
	<meta name="twitter:site" content="@stackitgroup" />
	<meta name="twitter:url" content={`${siteUrl}${page.url.pathname}`} />
	<meta name="twitter:title" content={siteTitle} />
	<meta name="twitter:description" content={siteDescription} />
	<meta name="twitter:image" content={absoluteSocialImage} />
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
	
	<!-- Theme color for mobile browsers -->
	<meta name="theme-color" content="#3F5FDD" />
	<meta name="theme-color" media="(prefers-color-scheme: light)" content="#3F5FDD" />
	<meta name="theme-color" media="(prefers-color-scheme: dark)" content="#1a1a1a" />
	
	<!-- Apple-specific meta tags -->
	<meta name="apple-mobile-web-app-capable" content="yes" />
	<meta name="apple-mobile-web-app-status-bar-style" content="default" />
	<meta name="apple-mobile-web-app-title" content="Stackit" />
</svelte:head>

<!-- JSON-LD Structured Data -->
<JsonLd data={generateOrganization(STACKIT_ORGANIZATION)} />
<JsonLd data={generateWebsite(STACKIT_WEBSITE)} />

{@render children?.()}
{#if page.url.pathname !== '/closure'}
	<SiteFooter />
{/if}
<Toaster />
<ContactForm />
<InHouseDrivePanel />
