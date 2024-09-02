import { type ActionFailure, fail } from '@sveltejs/kit';
import { Resend } from 'resend';

import { RESEND_API_KEY, EMAIL_RECIPIENT } from '$env/static/private';
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
    | ActionFailure<{
        success: false;
        data: {
          [k: string]: FormDataEntryValue;
        };
        errors: Array<{
          field:
            | typeof nameFieldValue
            | typeof emailFieldValue
            | typeof websiteFieldValue
            | typeof contentFieldValue
            | 'resendError';
          message: string;
        }>;
      }>
  > => {
    const formData = await request.formData();
    const data = Object.fromEntries(formData);

    const formParsedResult = contactFormSchema.safeParse(data);

    if (!formParsedResult.success) {
      return fail(400, {
        success: false,
        data,
        errors: formParsedResult.error.errors.map((err) => ({
          field: err.path[0] as
            | typeof nameFieldValue
            | typeof emailFieldValue
            | typeof websiteFieldValue
            | typeof contentFieldValue,
          message: err.message
        }))
      });
    }

    const resend = new Resend(RESEND_API_KEY);

    const { error: resendError } = await resend.emails.send({
      from: `Resend via ${new URL(request.url).hostname} <onboarding@resend.dev>`,
      to: EMAIL_RECIPIENT,
      subject: `Contact form submission from ${data[nameFieldValue]} <${data[emailFieldValue]}>`,
      html: `<p><strong>Message:</strong></p><p>${data[contentFieldValue]}</p>${
        data[websiteFieldValue]
          ? `<p style="margin-top: 3em;"><strong>Website:</strong></p><p>${data[websiteFieldValue]}</p>`
          : ''
      }
    `
    });

    if (resendError) {
      return fail(400, {
        success: false,
        data: {
          [nameFieldValue]: data[nameFieldValue],
          [emailFieldValue]: data[emailFieldValue],
          [websiteFieldValue]: data[websiteFieldValue],
          [contentFieldValue]: data[contentFieldValue]
        },
        errors: [
          {
            field: 'resendError',
            message: resendError.message
          }
        ]
      });
    }

    return { success: true };
  }
} satisfies Actions;
