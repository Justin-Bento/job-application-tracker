import type { Config } from "tailwindcss";
import colors from "tailwindcss/colors";

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
      background: "var(--background)",
      foreground: "var(--foreground)",
    },
  },
  plugins: [],
};
export default config;
