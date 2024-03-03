import { type ClassValue, clsx } from 'clsx';
import { twMerge } from 'tailwind-merge';

export type Inputs = ClassValue[];

export const cn = (...inputs: Inputs): string => {
  return twMerge(clsx(inputs));
};
