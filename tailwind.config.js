/** @type {import('tailwindcss').Config} */

const colors = require("./colorPalette");

module.exports = {
  content: ["./src/**/*.{js,jsx,ts,tsx}"],
  theme: {
    extend: {
      colors,
      fontFamily: {
        gsSemibold: ["General Sans Semibold"],
        gsSMedium: ["General Sans Medium"],
      },
    },
  },
  plugins: [],
};
