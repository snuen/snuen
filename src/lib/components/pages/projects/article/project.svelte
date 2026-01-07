<script lang="ts">
  import ExternalLink from '$lib/components/ui/external-link.svelte';

  interface Props {
    href: string;
    linkText: string;
    description: string;
    tags: string[];
  }

  let { href, linkText, description, tags }: Props = $props();
</script>

<section class="mt-4 pb-4 border-b border-gray-600 border-dashed">
  <ExternalLink {href} text={linkText} />
  <p class="mt-2">{description}</p>
  <p class="flex gap-2 mt-2">
    {#each tags as tag, i (`${tag}-${i}`)}
      <span class="badge border-current">{tag}</span>
    {/each}
  </p>
</section>
