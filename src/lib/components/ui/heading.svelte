<script lang="ts">
  import { type Inputs, cn } from '$lib/utils/tailwind-helper';

  export let level: 1 | 2 | 3;

  const baseClassArray = [
    'font-semibold',
    'my-[0.25em]'
  ] as const satisfies Inputs;
</script>

{#if level === 1}
  <h1 class={cn([...baseClassArray, 'text-3xl'])}>
    <slot />
  </h1>
{:else if level === 2}
  <h2 class={cn([...baseClassArray, 'text-2xl'])}>
    <slot />
  </h2>
{:else if level === 3}
  <h3 class={cn([...baseClassArray, 'text-xl'])}>
    <slot />
  </h3>
{/if}
