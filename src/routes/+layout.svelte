<script lang="ts">
	import '../app.css'
	// import SiteHeader from '$lib/components/site-header.svelte'
	// import SiteFooter from '$lib/components/site-footer.svelte'
	import favicon from '$lib/assets/logo.webp'
	import { onMount } from 'svelte'
	import { Toaster } from 'svelte-sonner'

	let { children } = $props()

	// Force early theme initialization (redundant safety check)
	onMount(() => {
		// Ensure theme is properly initialized even if early init failed
		const currentTheme = localStorage.getItem('theme')
		if (!currentTheme) {
			localStorage.setItem('theme', 'light')
			if (typeof document !== 'undefined') {
				document.documentElement.classList.remove('dark')
			}
		}
	})
</script>

<svelte:head>
	<link rel="icon" href={favicon} />
	<title>StackIt - Your Success Partner</title>
</svelte:head>

<!-- <SiteHeader /> -->
{@render children?.()}
<!-- <SiteFooter /> -->

<Toaster />
