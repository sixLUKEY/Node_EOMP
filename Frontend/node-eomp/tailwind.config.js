/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ['./index.html', './src/**/*.{vue,js,ts,jsx,tsx}'],
  theme: {
    extend: {
      colors: {
        'primary': '#284B63',
        'secondary': '#A2A2A2',
        'dark': '#353535',
        'light': '#FFFFFF'
      }
    }
  },
  plugins: [],
}

