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
    extend: {
      boxShadow: {
        'button': '0px -1px 24px -3px',
      },
      keyframes: {
        'gradient-x': {
          '0%, 100%': {
            'background-size': '200% 200%',
            'background-position': 'left bottom'
          },
          '50%': {
            'background-size': '200% 200%',
            'background-position': 'right bottom'
          }
        },
      },
      animation: {
        'gradient-x': 'gradient-x 2s ease infinite'
      },
    },
  },
  plugins: [],
};
