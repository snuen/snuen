<script lang="ts">
  import { PUBLIC_TURNSTILE_SITE_KEY } from '$env/static/public';

  import FormTextInput from './form-text-input.svelte';
  import FormTextarea from './form-textarea.svelte';
  import FormAlert from './form-alert.svelte';
  import {
    nameFieldValue,
    emailFieldValue,
    websiteFieldValue,
    contentFieldValue
  } from './util';

  let isSubmitting = false;
  let submitSuccess = false;
  let submitError = '';

  let nameValue = '';
  let emailValue = '';
  let websiteValue = '';
  let contentValue = '';

  let nameErrorText: string | undefined;
  let emailErrorText: string | undefined;
  let websiteErrorText: string | undefined;
  let contentErrorText: string | undefined;

  function handleSubmit(event: Event) {
    event.preventDefault();
    isSubmitting = true;

    // For now, just show a message that the form is disabled
    // In the future, this could call an API endpoint
    setTimeout(() => {
      isSubmitting = false;
      submitError = 'コンタクトフォームは現在使えません。直接メールください。';
    }, 1000);
  }
</script>

<form
  autocomplete="off"
  class="flex flex-col gap-4 items-start mt-6"
  on:submit={handleSubmit}
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

{#if submitSuccess}
  <FormAlert text="送信されました！" className={['alert-success', 'mt-6']} />
{/if}

{#if submitError}
  <FormAlert text={submitError} className={['alert-warning', 'mt-6']} />
{/if}
