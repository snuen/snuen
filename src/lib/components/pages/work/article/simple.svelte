<script lang="ts">
  import Heading from '$lib/components/ui/heading.svelte';
  import contentJa from '$lib/contents/pages/work/content-ja-simple.json';

  const content = contentJa;
</script>

<article>
  <Heading level={2}>Work</Heading>
  
  <section class="mt-8 mb-8">
    <Heading level={3}>{content.currentWork.title}</Heading>
    <p class="mt-4 leading-relaxed">{content.currentWork.description}</p>
  </section>

  <section class="mb-8">
    <Heading level={3}>{content.recentWork.title}</Heading>
    <p class="mt-4 leading-relaxed">{content.recentWork.description}</p>
  </section>
</article>
