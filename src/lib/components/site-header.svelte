<script>
	import StackitLogoWhite from '$lib/assets/stackit-logo-white.webp'
</script>

<!-- Skip link for accessibility -->
<a
	href="#main-content"
	class="sr-only focus:not-sr-only focus:absolute focus:top-4 focus:left-4 bg-[#3F5FDD] text-white px-4 py-2 rounded-md z-[9999] focus:outline-none focus:ring-2 focus:ring-white"
>
	Skip to main content
</a>

<header
	id="header"
	class="bg-black border-b border-gray-800 sticky top-0 left-0 right-0 z-50"
>
	<div class="container mx-auto px-6 py-4 flex justify-between items-center"
	>
		<span class="flex items-center">
			<img
				src={StackitLogoWhite}
				alt="Stackit Logo"
				class="h-9 w-auto"
			/>
		</span>
		<div class="flex items-center space-x-6">
			<a
				href="#contact"
				class="bg-[#3F5FDD] hover:bg-[#3550B8] text-white font-semibold px-6 py-3 text-basehover:text-white transition-colors duration-300 rounded-lg"
			>Introduction Call
			</a>
		</div>
	</div>
</header>

<style>
	.sr-only {
		position: absolute;
		width: 1px;
		height: 1px;
		padding: 0;
		margin: -1px;
		overflow: hidden;
		clip: rect(0, 0, 0, 0);
		white-space: nowrap;
		border: 0;
	}

	.focus\:not-sr-only:focus {
		position: absolute;
		width: auto;
		height: auto;
		padding: 0.5rem 1rem;
		margin: 0;
		overflow: visible;
		clip: auto;
		white-space: normal;
		border: 0;
		top: 1rem;
		left: 1rem;
		z-index: 9999;
	}
</style>
