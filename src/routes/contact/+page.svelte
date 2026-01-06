<script lang="ts">
  import { setContext } from 'svelte';

  import Contact from '$lib/components/pages/contact/index.svelte';

  import { type ActionData, contextKey } from './util';

  let { form }: { form: ActionData } = $props();

  // Context must be set synchronously during component initialization
  // In Svelte 5, we pass a function to get the reactive value
  setContext(contextKey, () => form);
</script>

<svelte:head>
  <script
    src="https://challenges.cloudflare.com/turnstile/v0/api.js"
    async
    defer
  ></script>
</svelte:head>

<Contact />
