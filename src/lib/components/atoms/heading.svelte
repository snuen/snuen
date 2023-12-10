<script lang="ts">
	export let level: 1 | 2 | 3;
</script>

{#if level === 1}
	<h1 class="text-3xl font-semibold">
		<slot />
	</h1>
{:else if level === 2}
	<h2 class="text-2xl font-semibold">
		<slot />
	</h2>
{:else if level === 3}
	<h3 class="text-xl font-semibold">
		<slot />
	</h3>
{/if}

<style>
	h1,
	h2,
	h3 {
		margin-top: 0.25em;
		margin-bottom: 0.25em;
	}
</style>
