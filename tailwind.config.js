/** @type {import('tailwindcss').Config} */
export default {
	content: ['./src/**/*.{html,js,svelte,ts}'],
	theme: {
		extend: {
			gridTemplateRows: {
				layout: 'auto 1fr auto'
			}
		}
	},
	plugins: [require('daisyui')],
	daisyui: {
		themes: ['retro']
	}
};
