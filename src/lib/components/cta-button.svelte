<script lang="ts">
	import type { Snippet } from 'svelte'

	interface Props {
		variant?: 'primary' | 'secondary' | 'outline'
		size?: 'sm' | 'md' | 'lg'
		class?: string
		type?: 'button' | 'submit' | 'reset'
		children: Snippet
	}

	let {
		variant = 'primary',
		size = 'md',
		class: className = '',
		type = 'button',
		children,
		...restProps
	}: Props = $props()

	const baseClasses = 'inline-flex items-center justify-center font-sans font-medium transition-colors duration-200 focus:outline-none focus:ring-2 focus:ring-offset-2 disabled:opacity-50 disabled:cursor-not-allowed'

	const variants = {
		primary: 'bg-gray-200 text-gray-900 hover:bg-gray-300 focus:ring-gray-500 dark:bg-gray-700 dark:text-white dark:hover:bg-gray-600',
		secondary: 'bg-green-500 text-white hover:bg-green-600 focus:ring-green-500',
		outline: 'border border-green-500 bg-transparent text-green-500 hover:bg-green-500 hover:text-white focus:ring-green-500'
	}

	const sizes = {
		sm: 'px-3 py-1.5 text-sm rounded',
		md: 'px-6 py-2.5 text-base rounded-md',
		lg: 'px-8 py-3 text-lg rounded-lg'
	}

	const classes = `${baseClasses} ${variants[variant]} ${sizes[size]} ${className}`.trim()
</script>

<button {type} class={classes} {...restProps}>
	{@render children()}
</button>
