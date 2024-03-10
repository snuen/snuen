import { z } from 'zod';

export const nameFieldValue = 'name';
export const emailFieldValue = 'email';
export const websiteFieldValue = 'website';
export const contentFieldValue = 'content';

const nameErrorMessage = 'お名前を入力してください';
const emailErrorMessage = 'メールアドレスを正しい形式で入力してください';
const websiteErrorMessage = 'WebサイトのURLを正しい形式で入力してください';
const contentErrorMessage = '本文を入力してください';

export const contactFormSchema = z.object({
  [nameFieldValue]: z.string().min(1, nameErrorMessage),
  [emailFieldValue]: z.string().email(emailErrorMessage),
  [websiteFieldValue]: z.union([
    z.string().url(websiteErrorMessage),
    z.literal('')
  ]),
  [contentFieldValue]: z.string().min(1, contentErrorMessage)
});
