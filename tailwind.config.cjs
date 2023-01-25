/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        "soft-white": "#ffffff",
        "very-dark-blue": "#1B1D23",
        "dark-grey": "#60636D",
        "medium-grey": "#7D828F",
        "light-grey": "#C8CCD8",
        "very-light-grey": '#eeeff4',
        "red-error": '#DF5656'
      },
      screens:{
        "xl": "1490px",
        "2xl":"2010px",
      }
    },
  },
  plugins: [],
}
