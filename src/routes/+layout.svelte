<script lang="ts">
	import '../app.css'
	import SiteHeader from '$lib/components/site-header.svelte'
	import favicon from '$lib/assets/favicon.svg'
	import SiteFooter from '$lib/components/site-footer.svelte'

	let { children } = $props()
</script>

<svelte:head>
	<link rel="icon" href={favicon} />
	<meta name="viewport" content="width=device-width, initial-scale=1" />
	<title>StackIt - Your Success Partner</title>
</svelte:head>

<SiteHeader />
{@render children?.()}
<SiteFooter />
