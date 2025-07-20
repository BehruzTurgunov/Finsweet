/** @type {import('tailwindcss').Config} */
module.exports = {
	content: [
		'./app/**/*.{js,ts,jsx,tsx,mdx}',
		'./pages/**/*.{js,ts,jsx,tsx,mdx}',
		'./components/**/*.{js,ts,jsx,tsx,mdx}',

		// Or if using `src` directory:
		'./src/**/*.{js,ts,jsx,tsx,mdx}',
	],
	theme: {
		extend: {
			maxWidth: {
				1440: '1440px',
				520: '520px',
			},
			lineHeight: {
				74: '74px',
				64: '64px',
			},
			colors: {
				gravelFint: '#F4F6FC33',
				flyByNight: '#1C1E53',
				manguBlack: '#282938',
				snugYellow: '#FCD980',
				bluePencil: '#2405F2',
				sambucus: '#1B1C2B',
				maWhite: '#F4F6FC',
				cosmic: '#BBBBCB',
			},
		},
	},
	plugins: [],
}
