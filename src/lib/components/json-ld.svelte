<script lang="ts">
	import { onMount } from 'svelte'

	interface Props {
		data: Record<string, any> | Record<string, any>[]
	}

	let { data }: Props = $props()

	let jsonLdScript: string = $state('')

	$effect(() => {
		if (data) {
			jsonLdScript = JSON.stringify(data, null, 2)
		}
	})
</script>

<svelte:head>
	{#if jsonLdScript}
		{@html `<script type="application/ld+json">${jsonLdScript}</script>`}
	{/if}
</svelte:head>
