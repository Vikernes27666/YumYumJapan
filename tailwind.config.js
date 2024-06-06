/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './src/**/*.{js,ts,jsx,tsx}'],
  theme: {
    extend: {},
    screens: {
      phone: '280px',
      tablet: '640px',
      mac: '1280px',
      laptop: '1536px',
      desktop: '1920px'
    }
  },
  plugins: [
    function ({ addUtilities }) {
      const newUtilities = {
        '.no-arrows': {
          '&::-webkit-outer-spin-button': {
            '-webkit-appearance': 'none',
            margin: '0'
          },
          '&::-webkit-inner-spin-button': {
            '-webkit-appearance': 'none',
            margin: '0'
          },
          '-moz-appearance': 'textfield' // Firefox
        }
      }
      addUtilities(newUtilities, ['responsive', 'hover'])
    }
  ]
}
