/** @type {import('tailwindcss').Config} */
export default {
	content: ['./src/**/*.{astro,html,js,jsx,md,mdx,svelte,ts,tsx,vue}'],
	theme: {
		extend: {
			fontFamily: {
				sans: ['Noto Sans HK', '-apple-system', 'BlinkMacSystemFont', 'system-ui', 'sans-serif'],
			},
			fontSize: {
				'h1': '3.5rem',
				'h2': '2.5rem',
				'h3': '1.63rem',
				'body': '1rem',
			},
			colors: {
				'white': '#ffffff',
				'light-gray': '#f4f4f5',
				'medium-gray': '#ededed',
				'dark-gray': '#ababab',
				'navy': '#1d273a',
				'charcoal': '#222222',
				'black': '#000000',
			},
		},
	},
	plugins: [],
} 