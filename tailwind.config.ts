import type { Config } from 'tailwindcss';
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
  plugins: [containerQueries]
} satisfies Config;
