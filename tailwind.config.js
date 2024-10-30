/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    extend: {
      fontFamily: {
       Flamenco: ["Flamenco", "system-ui"],
       Quicksand: ["Quicksand", "serif"],
       Poppins: ["Poppins", "serif"],
       Abel: ["Abel", "serif"]

      },
      colors: {
        coolGray: '#9197AE',
        naplesYellow: '#F4D35E',
        naplesYellowDark: "#AC890C"
      }
    },
  },
  plugins: [],
}