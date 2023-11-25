<script lang="ts">
	import Heading from '$lib/components/atoms/heading.svelte';
	import Project from './project.svelte';
</script>

<article>
	<Heading level={2}>Projects</Heading>
	<section class="mt-8 mb-8">
		<Heading level={3}>Client projects</Heading>
		<Project
			href="https://www.harikae-co.com/"
			linkText="Harikae"
			description="ブランディングサイト／ファッションデザイナー・建築家"
			tags={['Vue', 'Nuxt']}
		/>
	</section>
	<section class="mb-8">
		<Heading level={3}>Side projects</Heading>
		<Project
			href="https://lsdcamp-fes-2021.vercel.app/"
			linkText="LSD.Camp Fes 2021"
			description="オンラインフェスサイト"
			tags={['TypeScript', 'React', 'Next']}
		/>
	</section>
</article>
