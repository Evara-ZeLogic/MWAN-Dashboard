/** @type {import('tailwindcss').Config} */
module.exports = {
  darkMode: "class",
  content: ["./src/**/*.{html,js,jsx}"],
  variants: {
    extend: {
      textOpacity: ["dark"],
    },
  },
  theme: {
    extend: {
      // backgroundColor: {
      //   all: "black",
      // },
    },
  },
  plugins: [],
};
