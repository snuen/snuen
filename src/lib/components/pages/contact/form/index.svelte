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
		errorText={form === null
			? undefined
			: form.errors?.find((err) => err.path[0] === nameFieldValue)?.message}
		isRequired
	/>
	<FormTextInput
		type="text"
		name="email"
		labelText="メールアドレス"
		placeholder="info@example.com"
		errorText={form === null
			? undefined
			: form.errors?.find((err) => err.path[0] === emailFieldValue)?.message}
		isRequired
	/>
	<FormTextInput
		type="text"
		name="website"
		labelText="Webサイト"
		placeholder="https://example.com"
		errorText={form === null
			? undefined
			: form.errors?.find((err) => err.path[0] === websiteFieldValue)?.message}
		isRequired={false}
	/>
	<FormTextarea
		name="content"
		placeholder=""
		labelText="本文"
		errorText={form === null
			? undefined
			: form.errors?.find((err) => err.path[0] === contentFieldValue)?.message}
		isRequired
	/>
	<button type="submit" class="btn mt-2">送信する</button>
</form>
