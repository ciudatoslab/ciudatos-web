/** @type {import('tailwindcss').Config} */
export default {
	content: ['./src/**/*.{astro,html,js,jsx,md,mdx,svelte,ts,tsx,vue}'],
	theme: {
		extend: {
			fontFamily: {
				'rubik': ['Rubik', 'sans-serif']
			},
			colors: {
				'azul-ciudatos': '#1e237c',
				'verde-ciudatos': '#65ceB6',
				'verde-suave-ciudatos': '#C8ECE4',
				'gris': '#F5F5F5'
			}
		},
	},
	plugins: [],
}
