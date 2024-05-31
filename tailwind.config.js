/** @type {import('tailwindcss').Config} */
const colors = require('tailwindcss/colors')
module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    extend: {
      backgroundImage: {
        'custom-gradient': 'linear-gradient(132deg, #EE2C3C 10.58%, #C5135D 40.1%, #6A11B0 70%)',
      },
    },
  },
  plugins: [],
}