/** @type {import('tailwindcss').Config} */

module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    extend: {
      screens: {
        '3xl': '1650px',
      },
      colors: {
        primary_black: '#0B0B0B',
        secondary_black: '#0B0B0B',
        primary_white: '#FFFFFF',
        secondary_white: '#D9D9D9',
        primary_grey: '#ECECEC',
        secondary_grey: '#707070',
        primary_yellow: '#EEBA2F',
        secondary_yellow: '#FFBE1D',
      },
      textStroke: {
        '1': '1px',
      },
    },
  },
  plugins: [
    function ({ addBase, theme }) {
      addBase({
        'html': { fontSize: 'px' },
        '@screen lg': { 'html': { fontSize: '6px' } },
        '@screen xl': { 'html': { fontSize: '7px' } },
        '@screen 2xl': { 'html': { fontSize: '8.5px' } },
        '@screen 3xl': { 'html': { fontSize: '10px' } },
      })
    },
    function ({ addUtilities }) {
      addUtilities(
        {
          '.text-stroke': {
            '-webkit-text-stroke': '1px #D9D9D9', // Adjust the size and color as needed
          },
          '.rotate-y-90': { transform: 'rotateY(90deg)', },
          '.rotate-y-0': { transform: 'rotateY(0)', },
        },
        ['responsive', 'hover']
      );
    },
  ],
}

