<script lang="ts">
	import favicon from '$lib/assets/stackit_isologo.png'
	import SiteFooter from '$lib/components/site-footer.svelte'
	import SiteHeader from '$lib/components/site-header.svelte'
	import { Toaster } from 'svelte-sonner'
	import '../app.css'

	let { children } = $props()

</script>

<svelte:head>
	<title>Stackit - Your External Dev Team with In-House Drive</title>
	<link rel="icon" href={favicon} />
	<link rel="preconnect" href="https://fonts.googleapis.com">
	<link rel="preconnect" href="https://fonts.gstatic.com" crossorigin="anonymous">
	<link href="https://fonts.googleapis.com/css2?family=Figtree:wght@400;500;600;700;900&display=swap" rel="stylesheet">
</svelte:head>

<SiteHeader />
{@render children?.()}
<SiteFooter />
<Toaster />
