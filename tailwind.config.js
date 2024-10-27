/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
    },
  },
  plugins: [ function ({ addUtilities }) {
    addUtilities({
      '.scrollbar-hidden': {
        '::-webkit-scrollbar': {
          width: '0px',
        },
        'scrollbar-width': 'none',
      },
      '.scrollbar-visible': {
        '::-webkit-scrollbar': {
          width: '12px',
        },
        '::-webkit-scrollbar-track': {
          background: 'white',
          borderRadius: '10px',
        },
        '::-webkit-scrollbar-thumb': {
          background: 'white',
          borderRadius: '10px',
        },
        '::-webkit-scrollbar-thumb:hover': {
          background: 'white',
        },
        'scrollbar-width': 'thin',
        'scrollbar-color': '#e0e0e0 ',
      },
    });
  },],
}