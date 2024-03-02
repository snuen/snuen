<script lang="ts">
	import Heading from '$lib/components/ui/heading.svelte';
	import contentJa from '$lib/contents/pages/top/content-ja.json';

	const content = contentJa;
</script>

<article>
	{#each content.sections as section, i (i)}
		<section class="mb-8">
			<Heading level={2}>{section.title}</Heading>
			{#if section.element === 'p'}
				{#each section.items as item, j (j)}
					<p>{item}</p>
				{/each}
			{:else if section.element === 'ul'}
				<ul class="list-disc list-inside">
					{#each section.items as item, j (j)}
						<li>{item}</li>
					{/each}
				</ul>
			{/if}
		</section>
	{/each}
</article>
