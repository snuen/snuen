<script lang="ts">
  import Heading from '$lib/components/ui/heading.svelte';

  import Form from './form/index.svelte';
</script>

<article>
  <Heading level={2}>Contact</Heading>
  <p class="my-6">お気軽にご連絡ください。</p>
  <div class="mb-8">
    <Form />
  </div>
</article>
