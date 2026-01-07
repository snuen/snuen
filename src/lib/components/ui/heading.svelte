<script lang="ts">
  import type { Snippet } from 'svelte';
  import { type Inputs, cn } from '$lib/utils/tailwind-helper';

  interface Props {
    level: 1 | 2 | 3;
    children: Snippet;
  }

  let { level, children }: Props = $props();

  const baseClassArray = [
    'font-semibold',
    'my-[0.25em]'
  ] as const satisfies Inputs;
</script>

{#if level === 1}
  <h1 class={cn([...baseClassArray, 'text-3xl'])}>
    {@render children()}
  </h1>
{:else if level === 2}
  <h2 class={cn([...baseClassArray, 'text-2xl'])}>
    {@render children()}
  </h2>
{:else if level === 3}
  <h3 class={cn([...baseClassArray, 'text-xl'])}>
    {@render children()}
  </h3>
{/if}
