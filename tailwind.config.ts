import type { Config } from "tailwindcss";
import colors, { green, yellow } from "tailwindcss/colors";

const config: Config = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    colors: {
      white: colors.gray[50],
      black: colors.gray[950],
      gray: colors.neutral,
      blue: {
        50: "#edf7ff",
        100: "#ddecf8",
        200: "#cce0f1",
        300: "#93bcdc",
        400: "#66a0cd",
        500: "#2694d6",
        600: "#1f73b7",
        700: "#13456d",
        800: "#0f3655",
        900: "#0a2338",
        950: "#061420",
      },
      green: {
        50: "#eef8f4",
        100: "#daeee6",
        200: "#cae3d9",
        300: "#94c1b0",
        400: "#4eab89",
        500: "#26a178",
        600: "#037f52",
        700: "#104b35",
        800: "#0b3b29",
        900: "#0c261c",
        950: "#0a1511",
      },
      red: {
        50: "#fff2f3",
        100: "#fee3e5",
        200: "#f5d5d8",
        300: "#f2a1a8",
        400: "#ea7881",
        500: "#eb5c69",
        600: "#cd3642",
        700: "#7e1d25",
        800: "#671219",
        900: "#3d1418",
        950: "#1d1011",
      },
      background: "var(--background)",
      foreground: "var(--foreground)",
    },
  },
  plugins: [],
};
export default config;
