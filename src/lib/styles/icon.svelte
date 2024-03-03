<script lang="ts">
  import { type Inputs, cn } from '$lib/utils/tailwind-helper';

  export let className: Inputs;
</script>

<span class={cn(className)}>
  <slot />
</span>
