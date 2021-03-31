module.exports = {
  purge: [
    './src/pages/**/*.{js,ts,jsx,tsx}',
    './src/components/**/*.{js,ts,jsx,tsx}',
  ],
  darkMode: 'class', // or 'media' or 'class'
  theme: {
    extend: {
      screens: {
        '1.5xl': '1366px',
      },
    },
  },
  variants: {
    extend: {},
  },
  plugins: [],
};
