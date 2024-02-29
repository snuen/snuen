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

<Contact />
