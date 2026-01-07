<script lang="ts">
  interface Props {
    value: string;
    name: string;
    placeholder: string;
    labelText: string;
    errorText: string | undefined;
    isRequired: boolean;
    onfocus?: (event: FocusEvent) => void;
  }

  let {
    value = $bindable(),
    name,
    placeholder,
    labelText,
    errorText,
    isRequired,
    onfocus
  }: Props = $props();
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
    {onfocus}
  />
  {#if typeof errorText !== 'undefined'}
    <div class="label">
      <span class="label-text text-error">{errorText}</span>
    </div>
  {/if}
</label>
