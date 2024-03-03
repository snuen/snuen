import type { Config } from 'tailwindcss';
import daisyui from 'daisyui';

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
  plugins: [daisyui],
  daisyui: {
    themes: ['autumn', 'dim']
  }
} satisfies Config;
