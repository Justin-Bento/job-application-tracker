const defaultTheme = require("tailwindcss/defaultTheme");

/** @type {import('tailwindcss').Config} */
module.exports = {
  mode: "jit",
  content: [
    "./pages/**/*.{js,ts,jsx,tsx}",
    "./components/**/*.{js,ts,jsx,tsx}",
    "./app/**/*.{js,ts,jsx,tsx}",
    //...
  ],
  theme: {
    extend: {
      colors: {
        primary: {
          50: "#f2faeb",
          100: "#e4f2d5",
          200: "#cae7af",
          300: "#a7d680",
          400: "#86c356",
          500: "#69a939",
          600: "#4f862a",
          700: "#3e6724",
          800: "#345222",
          900: "#2e4720",
          950: "#15260d",
        },
        black: "#080808",
        white: "#f7faf6",
        primary: {
          light: "#4f862a",
          DEFAULT: "#3e6724",
          dark: "#15260d"
        },
        secondary: "#aed795",
        accent: "#799abb",
      },
      backgroundImage: {
        "gradient-radial": "radial-gradient(var(--tw-gradient-stops))",
        "gradient-conic": "conic-gradient(from 180deg at 50% 50%, var(--tw-gradient-stops))",
      },
      fontFamily: {
        sans: ["Public Sans", ...defaultTheme.fontFamily.sans],
      },
    },
  },
  plugins: [
    require("@tailwindcss/aspect-ratio"),
    // ...
  ],
};
