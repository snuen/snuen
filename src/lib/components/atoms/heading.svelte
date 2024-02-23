<script lang="ts">
	import { cn } from '$lib/utils/tw-helper';

	export let level: 1 | 2 | 3;

	const baseClassNames = ['font-semibold', 'my-[0.25em]'] as const;
</script>

{#if level === 1}
	<h1 class={cn([...baseClassNames, 'text-1xl'])}>
		<slot />
	</h1>
{:else if level === 2}
	<h2 class={cn([...baseClassNames, 'text-2xl'])}>
		<slot />
	</h2>
{:else if level === 3}
	<h3 class={cn([...baseClassNames, 'text-3xl'])}>
		<slot />
	</h3>
{/if}
