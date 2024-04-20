/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{js,jsx,ts,tsx}"],
  theme: {
    extend: {
      colors: {
        'lightpurple': '#ba66ff',
      },
    },
  },
  plugins: [
    require('tailwindcss'),
    require('autoprefixer')
  ]
}

