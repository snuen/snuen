<script lang="ts">
  import { setContext } from 'svelte';
  import { writable } from 'svelte/store';

  import Contact from '$lib/components/pages/contact/index.svelte';

  import { type ActionData, contextKey } from './util';

  export let form: ActionData;

  const contactForm = writable<ActionData>();
  $: contactForm.set(form);

  setContext(contextKey, form);
</script>

<svelte:head>
  <script
    src="https://challenges.cloudflare.com/turnstile/v0/api.js"
    async
    defer
  ></script>
</svelte:head>

<Contact />
