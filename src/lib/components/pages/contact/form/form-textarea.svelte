<script lang="ts">
  interface Props {
    value: string;
    name: string;
    placeholder: string;
    labelText: string;
    errorText: string | undefined;
    isRequired: boolean;
    onfocus?: () => void;
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

<label class="form-control w-full max-w-md">
  <div class="label">
    <span class="label-text"
      >{labelText}
      {#if isRequired}
        <span class="text-error">(必須)</span>
      {/if}
    </span>
  </div>
  <textarea
    bind:value
    {name}
    {placeholder}
    class="textarea textarea-bordered w-full h-24"
    {onfocus}
    aria-invalid={typeof errorText !== 'undefined'}
    aria-describedby={typeof errorText !== 'undefined'
      ? `${name}-error`
      : undefined}
  ></textarea>
  {#if typeof errorText !== 'undefined'}
    <div class="label">
      <span id={`${name}-error`} class="label-text text-error">{errorText}</span
      >
    </div>
  {/if}
</label>
