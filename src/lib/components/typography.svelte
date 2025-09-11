<script lang="ts">
	import type { Snippet } from 'svelte'

	type Variant = 'h1' | 'h2' | 'h3' | 'p' | 'small'
	let {
		variant,
		className,
		children
	}: {
		variant: Variant
		className?: string
		children: Snippet
	} = $props()

	const variantMap: Record<Variant, string> = {
		h1: 'text-balance font-sans text-3xl font-semibold leading-tight text-gray-900 dark:text-white sm:text-4xl md:text-5xl',
		h2: 'text-2xl font-semibold text-gray-900 dark:text-white sm:text-3xl md:text-4xl',
		h3: 'text-lg font-semibold text-gray-900 dark:text-white sm:text-xl lg:text-2xl',
		p: 'text-base text-pretty sm:text-lg text-gray-700 dark:text-gray-300 leading-relaxed',
		small: 'text-xs text-gray-600 dark:text-gray-400 sm:text-sm'
	}

	const classes = $derived(variantMap[variant as Variant] + (className ? ` ${className}` : ''))
</script>

<svelte:element this={variant} class={classes}>
	{@render children()}
</svelte:element>

<!-- <p> </p> -->
