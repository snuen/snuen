<script lang="ts">
	import Heading from '$lib/components/atoms/heading.svelte';
	import contentJa from '$lib/contents/pages/top/content-ja.json';
</script>

<article>
	{#each contentJa.sections as section, i (i)}
		<section class="mb-8">
			<Heading level={2}>{section.title}</Heading>
			{#each section.paragraphs as paragraph, j (j)}
				<p>{paragraph}</p>
			{/each}
		</section>
	{/each}
</article>
