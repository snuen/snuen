<script lang="ts">
  import type { Snippet } from 'svelte';
  import { type Inputs, cn } from '$lib/utils/tailwind-helper';

  interface Props {
    className: Inputs;
    children: Snippet;
  }

  let { className, children }: Props = $props();
</script>

<span class={cn(className)}>
  {@render children()}
</span>
