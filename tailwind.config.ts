import type { Config } from 'tailwindcss';
import daisyui from 'daisyui';
import containerQueries from '@tailwindcss/container-queries';

export default {
  content: ['./src/**/*.{html,js,svelte,ts}'],
  theme: {
    colors: {
      current: 'currentColor'
    },
    extend: {
      fontFamily: {
        sans: ['LINESeedJPStd']
      },
      gridTemplateColumns: {
        layout: '16rem 1fr 16rem'
      }
    }
  },
  plugins: [daisyui, containerQueries],
  daisyui: {
    themes: ['autumn', 'dim']
  }
} satisfies Config;
