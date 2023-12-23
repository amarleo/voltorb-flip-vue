/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './src/**/*.{vue,js,ts,jsx,tsx}'],
  theme: {
    extend: {
      colors: {
        board: {
          'tealGreen': '#08AB6A',
          'darkTeal': '#208465'
        }
      },
      fontFamily: {
        roboto: ['Roboto']
      },
    },
  },
  plugins: [],
}
