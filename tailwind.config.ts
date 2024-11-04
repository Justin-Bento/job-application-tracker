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
      background: "var(--background)",
      foreground: "var(--foreground)",
    },
  },
  plugins: [],
};
export default config;
