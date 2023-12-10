/** @type {import('tailwindcss').Config} */
export default {
	content: ['./src/**/*.{html,js,svelte,ts}'],
	theme: {
		colors: {
			current: 'currentColor'
		},
		extend: {
			gridTemplateColumns: {
				layout: '16rem 1fr 16rem'
			}
		}
	},
	plugins: [require('daisyui')],
	daisyui: {
		themes: ['autumn', 'dim']
	}
};
