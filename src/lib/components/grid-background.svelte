<script>
	export let className = ''
</script>

<!-- Grid Pattern Background -->
<div class="absolute inset-0 opacity-20 {className}" aria-hidden="true">
	<div
		class="h-full w-full"
		style="background-image: repeating-linear-gradient(0deg, transparent, transparent 35px, rgba(255,255,255,0.1) 35px, rgba(255,255,255,0.1) 36px), repeating-linear-gradient(90deg, transparent, transparent 35px, rgba(255,255,255,0.1) 35px, rgba(255,255,255,0.1) 36px);"
	></div>
</div>
