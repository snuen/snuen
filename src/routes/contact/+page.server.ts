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
          [nameFieldValue]: string;
          [emailFieldValue]: string;
          [websiteFieldValue]: string;
          [contentFieldValue]: string;
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

    const name = formData.get(nameFieldValue) as string;
    const email = formData.get(emailFieldValue) as string;
    const website = formData.get(websiteFieldValue) as string;
    const content = formData.get(contentFieldValue) as string;

    const data = {
      [nameFieldValue]: name,
      [emailFieldValue]: email,
      [websiteFieldValue]: website,
      [contentFieldValue]: content
    };

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
      subject: `Contact form submission from ${name} <${email}>`,
      html: `<p><strong>Message:</strong></p><p>${content}</p>${
        website
          ? `<p style="margin-top: 3em;"><strong>Website:</strong></p><p>${website}</p>`
          : ''
      }
    `
    });

    if (resendError) {
      return fail(400, {
        success: false,
        data,
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
