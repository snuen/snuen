<script lang="ts">
  export let value: string;
  export let name: string;
  export let placeholder: string;
  export let labelText: string;
  export let errorText: string | undefined;
  export let isRequired: boolean;
</script>

<label class="form-control w-full max-w-xs">
  <div class="label">
    <span class="label-text"
      >{labelText}
      {#if isRequired}
        <span class="text-error">(必須)</span>
      {/if}
    </span>
  </div>
  <input
    bind:value
    type="text"
    {name}
    {placeholder}
    class="input input-bordered w-full"
    on:focus
  />
  {#if typeof errorText !== 'undefined'}
    <div class="label">
      <span class="label-text text-error">{errorText}</span>
    </div>
  {/if}
</label>
