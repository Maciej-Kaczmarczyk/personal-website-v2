/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./app/**/*.{js,ts,jsx,tsx}",
    "./pages/**/*.{js,ts,jsx,tsx}",
    "./components/**/*.{js,ts,jsx,tsx}",

    // Or if using `src` directory:
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  darkMode: "class",
  theme: {
    colors: {
      transparent: "transparent",
      current: "currentColor",
      black: "#000000",
      white: "#ffffff",
      gray: {
        light: "#919EC0",
        DEFAULT: "#141423",
        dark: "#090911",
      },
      green: {
        light: "#24f2b1",
        DEFAULT: "#1ec993",
      },
      blue: {
        light: "#006aff",
        DEFAULT: "#0043FF",
        dark: "#0e7490",
      },
      purple: {
        light: "#8d36ff",
        DEFAULT: "#6f00ff",
      },

      // ...
    },
    extend: {},
  },
  plugins: [],
};
