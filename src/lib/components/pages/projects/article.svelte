<script lang="ts">
	import Heading from '$lib/components/atoms/heading.svelte';
	import ExternalLink from '$lib/components/atoms/external-link.svelte';
</script>

<article>
	<Heading level={2}>Projects</Heading>
	<section class="mt-8 mb-8">
		<Heading level={3}>Client projects</Heading>
		<section class="mt-4 pb-4 border-b border-gray-600 border-dashed">
			<ExternalLink href="https://www.harikae-co.com/" text="Harikae" />
			<p class="mt-2">ブランディングサイト／ファッションデザイナー・建築家</p>
			<p class="flex gap-2 mt-2"><span class="badge">Vue</span><span class="badge">Nuxt</span></p>
		</section>
	</section>
	<section class="mb-8">
		<Heading level={3}>Side projects</Heading>
		<section class="mt-4 pb-4 border-b border-gray-600 border-dashed">
			<ExternalLink href="https://lsdcamp-fes-2021.vercel.app/" text="LSD.Camp Fes 2021" />
			<p class="mt-2">オンラインフェスサイト</p>
			<p class="flex gap-2 mt-2">
				<span class="badge">TypeScript</span><span class="badge">React</span><span class="badge"
					>Next</span
				>
			</p>
		</section>
	</section>
</article>
