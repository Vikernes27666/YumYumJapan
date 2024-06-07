/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './src/**/*.{js,jsx,ts,tsx}'],
  theme: {
    extend: {
      boxShadow: {
        inner: 'inset 0 4px 20px rgba(0, 0, 0, 0.35)'
      }
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
