<script lang="ts">
  import ExternalLink from '$lib/components/ui/external-link.svelte';
  import Heading from '$lib/components/ui/heading.svelte';

  import contentJa from '$lib/contents/pages/top/content-ja.json';

  const content = contentJa;
</script>

<div
  class="flex flex-col md:flex-row md:items-center gap-6 md:gap-8 mb-6 md:mb-8"
>
  <figure class="min-w-[250px] min-h-[250px] overflow-hidden">
    <img src="/avatar.jpg" alt="avatar" width="250" height="250" />
  </figure>
  <div class="min-w-fit">
    <Heading level={1}>{content.heading}</Heading>
    <ul class="mt-3">
      {#each content.summaries as text (text)}
        <li class="mb-1">
          {text}
        </li>
      {/each}
    </ul>
    <dl class="flex gap-1 mt-2">
      <dt class="mb-1">🔗</dt>
      <dd class="flex gap-2">
        {#each content.links as { name, url } (url)}
          <ExternalLink href={url} text={name} />
        {/each}
      </dd>
    </dl>
  </div>
</div>
