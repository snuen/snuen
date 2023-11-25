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
			<p>ブランディングサイト／ファッションデザイナー・建築家</p>
		</section>
	</section>
	<section class="mb-8">
		<Heading level={3}>Side projects</Heading>
		<section class="mt-4 pb-4 border-b border-gray-600 border-dashed">
			<ExternalLink href="https://www.harikae-co.com/" text="LSD.Camp Fes 2021" />
			<p>オンラインフェスサイト</p>
		</section>
	</section>
</article>
