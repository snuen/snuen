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

  const getForm = getContext<() => ActionData>(contextKey);
  let form = $derived(getForm());

  let isSubmitting = $state(false);

  $effect(() => {
    if (isSubmitting && form !== null) {
      isSubmitting = false;
    }
  });

  let nameValue = $state('');
  let emailValue = $state('');
  let websiteValue = $state('');
  let contentValue = $state('');

  let nameErrorText = $state<string | undefined>(undefined);
  let emailErrorText = $state<string | undefined>(undefined);
  let websiteErrorText = $state<string | undefined>(undefined);
  let contentErrorText = $state<string | undefined>(undefined);

  // Sync form data when form changes (e.g., after server response)
  $effect(() => {
    if (form?.data) {
      nameValue = (form.data[nameFieldValue] ?? '') as string;
      emailValue = (form.data[emailFieldValue] ?? '') as string;
      websiteValue = (form.data[websiteFieldValue] ?? '') as string;
      contentValue = (form.data[contentFieldValue] ?? '') as string;
    }
    if (form?.errors) {
      nameErrorText = form.errors.find(
        (err) => err.field === nameFieldValue
      )?.message;
      emailErrorText = form.errors.find(
        (err) => err.field === emailFieldValue
      )?.message;
      websiteErrorText = form.errors.find(
        (err) => err.field === websiteFieldValue
      )?.message;
      contentErrorText = form.errors.find(
        (err) => err.field === contentFieldValue
      )?.message;
    }
  });
</script>

<form
  method="POST"
  autocomplete="off"
  class="flex flex-col gap-4 items-start mt-6"
  onsubmit={() => {
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
    onfocus={() => {
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
    onfocus={() => {
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
    onfocus={() => {
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
    onfocus={() => {
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
    className={['alert-success', 'mt-6']}
  />
{/if}
