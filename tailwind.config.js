/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./*html"],
  darkMode: "class", // class, media
  theme: {
    extend: {
      fontFamily:{
        'borel' :['Borel'], 
        'roboto' :['Roboto'], 
        'openSans' :['Open+Sans'], 
      }
    },
  },
  plugins: [],
}

