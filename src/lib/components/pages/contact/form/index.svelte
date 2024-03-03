<script lang="ts">
  import { getContext } from 'svelte';

  import { type ActionData, contextKey } from '$routes/contact/util';

  import FormTextInput from './form-text-input.svelte';
  import FormTextarea from './form-textarea.svelte';
  import {
    nameFieldValue,
    emailFieldValue,
    websiteFieldValue,
    contentFieldValue
  } from './util';

  const form = getContext<ActionData>(contextKey);

  let nameErrorText =
    form === null
      ? undefined
      : form.errors?.find((err) => err.path[0] === nameFieldValue)?.message;
  let emailErrorText =
    form === null
      ? undefined
      : form.errors?.find((err) => err.path[0] === emailFieldValue)?.message;
  let websiteErrorText =
    form === null
      ? undefined
      : form.errors?.find((err) => err.path[0] === websiteFieldValue)?.message;
  let contentErrorText =
    form === null
      ? undefined
      : form.errors?.find((err) => err.path[0] === contentFieldValue)?.message;
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
