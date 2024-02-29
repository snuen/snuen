import type { ZodError } from 'zod';

import {
	nameFieldValue,
	emailFieldValue,
	websiteFieldValue,
	contentFieldValue,
	contactFormSchema
} from '$lib/components/pages/contact/form/util';

import type { Actions } from './util';

export const actions = {
	default: async ({
		request
	}): Promise<
		| { success: true }
		| {
				success: false;
				errors: ZodError<{
					name: string;
					email: string;
					website: string;
					content: string;
				}>['errors'];
		  }
	> => {
		const data = await request.formData();
		const name = data.get(nameFieldValue);
		const email = data.get(emailFieldValue);
		const website = data.get(websiteFieldValue);
		const content = data.get(contentFieldValue);

		const formParsedResult = contactFormSchema.safeParse({
			[nameFieldValue]: name,
			[emailFieldValue]: email,
			[websiteFieldValue]: website,
			[contentFieldValue]: content
		});

		if (!formParsedResult.success) {
			return { success: false, errors: formParsedResult.error.errors };
		}

		return { success: true };
	}
} satisfies Actions;
