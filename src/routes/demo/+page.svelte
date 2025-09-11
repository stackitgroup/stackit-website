<script>
	import CtaButton from '$lib/components/cta-button.svelte'
</script>

<!-- CTA Button Demo Page -->
<div class="min-h-screen bg-gray-50 py-12 px-4 dark:bg-gray-900">
	<div class="mx-auto max-w-4xl">
		<header class="mb-12 text-center">
			<h1 class="mb-4 text-4xl font-bold text-gray-900 dark:text-white">
				CTA Button Styles Demo
			</h1>
			<p class="text-xl text-gray-600 dark:text-gray-300">
				Nuevos estilos de botones implementados según el diseño solicitado
			</p>
		</header>

		<div class="space-y-12">
			<!-- Primary Buttons -->
			<section class="rounded-lg bg-white p-8 shadow-sm dark:bg-gray-800">
				<h2 class="mb-6 text-2xl font-semibold text-gray-900 dark:text-white">
					Botones Primarios (Estilo Principal)
				</h2>
				<div class="flex flex-wrap gap-4">
					<CtaButton variant="primary" size="sm">Small Primary</CtaButton>
					<CtaButton variant="primary" size="md">Medium Primary</CtaButton>
					<CtaButton variant="primary" size="lg">Large Primary</CtaButton>
				</div>
				<p class="mt-4 text-sm text-gray-600 dark:text-gray-400">
					Fondo gris con hover más oscuro - Estilo principal según el diseño solicitado
				</p>
			</section>

			<!-- Secondary Buttons -->
			<section class="rounded-lg bg-white p-8 shadow-sm dark:bg-gray-800">
				<h2 class="mb-6 text-2xl font-semibold text-gray-900 dark:text-white">
					Botones Secundarios
				</h2>
				<div class="flex flex-wrap gap-4">
					<CtaButton variant="secondary" size="sm">Small Secondary</CtaButton>
					<CtaButton variant="secondary" size="md">Medium Secondary</CtaButton>
					<CtaButton variant="secondary" size="lg">Large Secondary</CtaButton>
				</div>
				<p class="mt-4 text-sm text-gray-600 dark:text-gray-400">
					Fondo verde con hover más oscuro
				</p>
			</section>

			<!-- Outline Buttons -->
			<section class="rounded-lg bg-white p-8 shadow-sm dark:bg-gray-800">
				<h2 class="mb-6 text-2xl font-semibold text-gray-900 dark:text-white">
					Botones con Borde
				</h2>
				<div class="flex flex-wrap gap-4">
					<CtaButton variant="outline" size="sm">Small Outline</CtaButton>
					<CtaButton variant="outline" size="md">Medium Outline</CtaButton>
					<CtaButton variant="outline" size="lg">Large Outline</CtaButton>
				</div>
				<p class="mt-4 text-sm text-gray-600 dark:text-gray-400">
					Transparente con borde verde, hover rellena el fondo
				</p>
			</section>

			<!-- Examples in Context -->
			<section class="rounded-lg bg-white p-8 shadow-sm dark:bg-gray-800">
				<h2 class="mb-6 text-2xl font-semibold text-gray-900 dark:text-white">
					Ejemplos en Contexto
				</h2>
				<div class="space-y-6">
					<div class="text-center">
						<h3 class="mb-4 text-xl text-gray-900 dark:text-white">
							Call to Action Principal
						</h3>
						<CtaButton variant="primary" size="lg">Get in Touch</CtaButton>
					</div>

					<div class="text-center">
						<h3 class="mb-4 text-xl text-gray-900 dark:text-white">
							Botón de Header
						</h3>
						<CtaButton variant="outline" size="sm">Introduction Call</CtaButton>
					</div>

					<div class="text-center">
						<h3 class="mb-4 text-xl text-gray-900 dark:text-white">
							Botón de Sección
						</h3>
						<CtaButton variant="primary" size="md">Let's Discuss</CtaButton>
					</div>
				</div>
			</section>

			<!-- Navigation -->
			<nav class="text-center">
				<a href="/demo/paraglide" class="text-blue-500 hover:text-blue-700 dark:text-blue-400">
					Ver demo de Paraglide →
				</a>
			</nav>
		</div>
	</div>
</div>
