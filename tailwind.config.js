/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    './index.html',
    './src/**/*.{vue, js}',
  ],
  theme: {
    fontFamily: {
      cubic: ['Cubic11'],
    },
    extend: {
      colors: {
        primary: '#FFE600',
      },
    },
  },
  plugins: [],
};
