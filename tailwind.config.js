/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{html,js}"],
  theme: {
    extend: {
      fontFamily: {
        Quicksand: ["Quicksand", "sans-serif"],
       },
      colors: {
        'projmain':'#c87137',
      },
    },
  },
  plugins: [],
}
