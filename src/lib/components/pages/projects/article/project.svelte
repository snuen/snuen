<script lang="ts">
	import ExternalLink from '$lib/components/atoms/external-link.svelte';

	export let href: string;
	export let linkText: string;
	export let description: string;
	export let tags: string[];
</script>

<section class="mt-4 pb-4 border-b border-gray-600 border-dashed">
	<ExternalLink {href} text={linkText} />
	<p class="mt-2">{description}</p>
	<p class="flex gap-2 mt-2">
		{#each tags as tag}
			<span class="badge">{tag}</span>
		{/each}
	</p>
</section>
