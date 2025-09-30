<script lang="ts">
	import JsonLd from '$lib/components/json-ld.svelte'
	import { generateFAQ, generateWebPage, generateBreadcrumbs } from '$lib/json-ld'

	// FAQ data
	const faqs = [
		{
			question: '¿Qué servicios ofrece StackIT?',
			answer: 'StackIT ofrece desarrollo de software personalizado, equipos de desarrollo externos, consultoría tecnológica y soluciones integrales para empresas.'
		},
		{
			question: '¿En qué tecnologías se especializa StackIT?',
			answer: 'Nos especializamos en tecnologías modernas como React, Vue.js, Node.js, Python, TypeScript, y frameworks como SvelteKit y Next.js.'
		},
		{
			question: '¿Cómo funciona el modelo de equipos externos?',
			answer: 'Proporcionamos equipos de desarrollo dedicados que trabajan como una extensión de tu equipo interno, con la misma dedicación y estándares de calidad.'
		},
		{
			question: '¿StackIT trabaja con empresas internacionales?',
			answer: 'Sí, trabajamos con empresas de Argentina, Latinoamérica y nivel global, adaptándonos a diferentes zonas horarias y metodologías de trabajo.'
		}
	]

	// Page data
	const pageData = generateWebPage({
		name: 'Preguntas Frecuentes - StackIT',
		description: 'Encuentra respuestas a las preguntas más frecuentes sobre los servicios de desarrollo de software de StackIT.',
		url: 'https://stackit.group/faq',
		isPartOf: {
			name: 'StackIT',
			url: 'https://stackit.group'
		},
		inLanguage: 'es'
	})

	// Breadcrumbs
	const breadcrumbs = generateBreadcrumbs([
		{ name: 'Inicio', url: 'https://stackit.group' },
		{ name: 'FAQ', url: 'https://stackit.group/faq' }
	])
</script>

<svelte:head>
	<title>Preguntas Frecuentes - StackIT</title>
	<meta name="description" content="Encuentra respuestas a las preguntas más frecuentes sobre los servicios de desarrollo de software de StackIT." />
</svelte:head>

<!-- JSON-LD for FAQ page -->
<JsonLd data={pageData} />
<JsonLd data={generateFAQ(faqs)} />
<JsonLd data={breadcrumbs} />

<main class="container mx-auto px-4 py-16 max-w-4xl">
	<div class="mb-8">
		<nav class="text-sm breadcrumb mb-4">
			<a href="/" class="text-blue-600 hover:text-blue-800">Inicio</a>
			<span class="mx-2">/</span>
			<span class="text-gray-600">FAQ</span>
		</nav>
		
		<h1 class="text-4xl font-bold text-gray-900 mb-4">
			Preguntas Frecuentes
		</h1>
		<p class="text-xl text-gray-600">
			Encuentra respuestas a las preguntas más comunes sobre StackIT y nuestros servicios.
		</p>
	</div>

	<div class="space-y-6">
		{#each faqs as faq, index}
			<details class="bg-white border border-gray-200 rounded-lg shadow-sm">
				<summary class="px-6 py-4 cursor-pointer hover:bg-gray-50 font-semibold text-gray-900">
					{faq.question}
				</summary>
				<div class="px-6 pb-4 text-gray-700">
					{faq.answer}
				</div>
			</details>
		{/each}
	</div>
</main>
