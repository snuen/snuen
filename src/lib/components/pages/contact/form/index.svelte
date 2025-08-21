<script lang="ts">
  import { getContext } from 'svelte';

  import { PUBLIC_TURNSTILE_SITE_KEY } from '$env/static/public';

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

  let isSubmitting = false;

  $: {
    if (isSubmitting && form !== null) {
      isSubmitting = false;
    }
  }

  let nameValue = (form?.data?.[nameFieldValue] ?? '') as string;
  let emailValue = (form?.data?.[emailFieldValue] ?? '') as string;
  let websiteValue = (form?.data?.[websiteFieldValue] ?? '') as string;
  let contentValue = (form?.data?.[contentFieldValue] ?? '') as string;

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
  on:submit={() => {
    isSubmitting = true;
  }}
>
  <FormTextInput
    bind:value={nameValue}
    name={nameFieldValue}
    labelText="お名前"
    placeholder=""
    errorText={nameErrorText}
    isRequired
    on:focus={() => {
      nameErrorText = undefined;
    }}
  />
  <FormTextInput
    bind:value={emailValue}
    name={emailFieldValue}
    labelText="メールアドレス"
    placeholder="info@example.com"
    errorText={emailErrorText}
    isRequired
    on:focus={() => {
      emailErrorText = undefined;
    }}
  />
  <FormTextInput
    bind:value={websiteValue}
    name={websiteFieldValue}
    labelText="Webサイト"
    placeholder="https://example.com"
    errorText={websiteErrorText}
    isRequired={false}
    on:focus={() => {
      websiteErrorText = undefined;
    }}
  />
  <FormTextarea
    bind:value={contentValue}
    name={contentFieldValue}
    placeholder=""
    labelText="本文"
    errorText={contentErrorText}
    isRequired
    on:focus={() => {
      contentErrorText = undefined;
    }}
  />
  <!-- The following line controls and configures the Turnstile widget. -->
  <div class="cf-turnstile" data-sitekey={PUBLIC_TURNSTILE_SITE_KEY}></div>
  <!-- end. -->
  <button type="submit" disabled={isSubmitting} class="btn mt-2"
    >送信する</button
  >
</form>

{#if form !== null && form.success}
  <FormAlert
    text="お問い合わせありがとうございます！ もし本気でしたら sungjoon512[at]gmail.com まで人力でご連絡ください"
    className={['mt-6']}
  />
{/if}
