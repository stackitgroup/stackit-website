<script>
	import StackitLogoWhite from '$lib/assets/stackit-logo-white.png'
</script>

<header
	id="header"
	class="bg-[#181818] border-b border-gray-800 fixed top-0 left-0 right-0 z-50"
>
	<div class="container mx-auto px-6 py-4 flex justify-between items-center">
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
				class="bg-transparent text-white border-2 border-[#3F5FDD] font-semibold px-6 py-3 text-base hover:bg-[#3F5FDD] hover:text-white transition-colors duration-300 rounded-lg"
			>Meet the team</a>
		</div>
	</div>
</header>
