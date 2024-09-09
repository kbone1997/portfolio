const flowbite = require("flowbite-react/tailwind");

/** @type {import('tailwindcss').Config} */
module.exports = {
  darkMode: 'selector',
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
    flowbite.content(),
  ],
  theme: {
    extend: {
      fontFamily: {
        sans: ['SUSE', 'sans-serif'], // Set Poppins as the default sans-serif font
      },
      colors: {
        primaryBackground: "#E9F5DB",
        primaryBackgroundDark: "#0E0E10",
        secondaryBackground: "#CFE1B9",
        secondaryBackgroundDark: "#151314",
        sectionBackground: "#B5C99A",
        sectionBackgroundDark: "#5A5A5A",
        subBackGround: "",
        subBackGroundDark: "#303030",
        colorGreenish: "#87986A",
        colorDeepGreenish: "#718355",
      },
      height: {
        '4/5': '80%',
      },
    },
  },
  plugins: [flowbite.plugin(),],
}