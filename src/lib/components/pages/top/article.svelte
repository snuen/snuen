<script lang="ts">
	import Heading from '$lib/components/atoms/heading.svelte';
	import contentJa from '$lib/contents/pages/top/content-ja.json';

	const content = contentJa;
</script>

<article>
	{#each content.sections as section, i (i)}
		<section class="mb-8">
			<Heading level={2}>{section.title}</Heading>
			{#each section.paragraphs as paragraph, j (j)}
				<p>{paragraph}</p>
			{/each}
		</section>
	{/each}
</article>
