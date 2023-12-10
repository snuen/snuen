<script lang="ts">
	import '$lib/styles/app.css';
	import Header from '$lib/components/layout/header/index.svelte';

	import type { LayoutData } from './$types';

	export let data: LayoutData;
</script>

<svelte:head>
	<title
		>{data.siteName +
			(data.pageName === ''
				? ''
				: ` | ${data.pageName.charAt(0).toUpperCase() + data.pageName.slice(1)}`)}</title
	>
</svelte:head>

<div class="md:grid md:grid-cols-layout min-h-screen max-w-7xl">
	<Header />
	<main
		class="col-start-2 col-end-4 xl:col-end-3 flex flex-col max-w-6xl pt-4 md:pt-8 px-4 md:px-8 lg:px-12 pb-12 md:pb-0"
	>
		<slot />
	</main>
	<footer class="col-start-3 col-end-4 hidden xl:block w-64 bg-base-200" />
</div>
