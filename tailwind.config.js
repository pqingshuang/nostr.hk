/** @type {import('tailwindcss').Config} */
export default {
	darkMode: 'media',
	content: ['./src/**/*.{html,js,svelte,ts}'],
	theme: {
		extend: {
			fontFamily: {
				sans: [
					'Inter var, sans-serif',
					{
						fontFeatureSettings: '"cv11", "ss01"',
						fontVariationSettings: '"opsz" 32'
					}
				]
			},
			dropShadow: {
				square: '0px 1px 1px rba(0, 0, 0, 0.1)',
				'square-xl': '10px 10px 0px rba(0, 0, 0, 0.1)'
			},
			backgroundImage: {
				'hero-bg': "url('/images/hongkong.webp')"
			}
		}
	},
	plugins: [require('@tailwindcss/typography')]
};
