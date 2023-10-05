/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    './home.html',
    "./node_modules/flowbite/**/*.js"
  ],
  theme: {
    colors: {
      'white': '',
      'blue': '#CEEAF7',
      'violet': '#4B3269',
      'mauve': '#B55A5F',
      'black': '#0B0E14',
      'cadet': '#1D1D46',
    },
    extend: {},
  },
  plugins: [
    require('flowbite/plugin')
  ],
}

