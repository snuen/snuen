<script lang="ts">
  import { getContext } from 'svelte';

  import { type ActionData, contextKey } from '$routes/contact/util';

  import FormTextInput from './form-text-input.svelte';
  import FormTextarea from './form-textarea.svelte';
  import FormAlert from './form-alert.svelte';
  import {
    nameFieldValue,
    emailFieldValue,
    websiteFieldValue,
    contentFieldValue
  } from './util';

  const form = getContext<ActionData>(contextKey);

  let nameErrorText = form?.errors?.find(
    (err) => err.field === nameFieldValue
  )?.message;
  let emailErrorText = form?.errors?.find(
    (err) => err.field === emailFieldValue
  )?.message;
  let websiteErrorText = form?.errors?.find(
    (err) => err.field === websiteFieldValue
  )?.message;
  let contentErrorText = form?.errors?.find(
    (err) => err.field === contentFieldValue
  )?.message;
</script>

<form
  method="POST"
  autocomplete="off"
  class="flex flex-col gap-4 items-start mt-6"
>
  <FormTextInput
    type="text"
    name="name"
    labelText="お名前"
    placeholder=""
    errorText={nameErrorText}
    isRequired
    on:focus={() => {
      nameErrorText = undefined;
    }}
  />
  <FormTextInput
    type="text"
    name="email"
    labelText="メールアドレス"
    placeholder="info@example.com"
    errorText={emailErrorText}
    isRequired
    on:focus={() => {
      emailErrorText = undefined;
    }}
  />
  <FormTextInput
    type="text"
    name="website"
    labelText="Webサイト"
    placeholder="https://example.com"
    errorText={websiteErrorText}
    isRequired={false}
    on:focus={() => {
      websiteErrorText = undefined;
    }}
  />
  <FormTextarea
    name="content"
    placeholder=""
    labelText="本文"
    errorText={contentErrorText}
    isRequired
    on:focus={() => {
      contentErrorText = undefined;
    }}
  />
  <button type="submit" class="btn mt-2">送信する</button>
</form>

{#if form !== null && form.success}
  <FormAlert text="送信されました！" className={['mt-6']} />
{/if}
