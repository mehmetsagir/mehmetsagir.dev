/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ['./app/**/*.{js,ts,jsx,tsx}', './components/**/*.{js,ts,jsx,tsx}'],
  theme: {
    extend: {
      colors: {
        darkest: '#121212',
        gray: {
          DEFAULT: '#cccccc',
        },
      },
    },
  },
  plugins: [],
};
