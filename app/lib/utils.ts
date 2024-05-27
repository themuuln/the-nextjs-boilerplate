const isDev = true;

import { clsx, type ClassValue } from 'clsx';
import { twMerge } from 'tailwind-merge';

export function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs));
}

export const clg = (...args: any[]) => {
  if (isDev) {
    console.log(...args);
  }
};
