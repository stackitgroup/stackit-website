<script>
	import StackitLogoWhite from '$lib/assets/stackit-logo-white.png'
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
	class="bg-[#181818] border-b border-gray-800 fixed top-0 left-0 right-0 z-50"

>
	<div class="container mx-auto px-6 py-4 flex justify-between items-center">
		<div class="flex items-center">
			<img
				src={StackitLogoWhite}
				alt="Stackit - Your External Dev Team with In-House Drive"
				class="h-9 w-auto"
				width="120"
				height="36"
			/>
		</div>

		<nav aria-label="Main navigation">
			<ul class="flex items-center space-x-6">
				<li>
					<a
						href="#contact"
						class="bg-transparent text-white border-2 border-[#3F5FDD] font-semibold px-6 py-3 text-base hover:bg-[#3F5FDD] hover:text-white transition-colors duration-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-white focus:ring-offset-2 focus:ring-offset-[#181818]"
						aria-describedby="contact-description"
					>
						Meet the team
					</a>
					<span id="contact-description" class="sr-only">
						Contact us to discuss your project needs
					</span>
				</li>
			</ul>
		</nav>
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
		position: static;
		width: auto;
		height: auto;
		padding: 0.5rem 1rem;
		margin: 0;
		overflow: visible;
		clip: auto;
		white-space: normal;
	}
</style>
