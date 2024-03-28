import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
      colors: {
        "primary": "#D8FF09",
        "text": "#FFFFFF",
        "theme": "#000000"
      }
  },
  plugins: [],
};
export default config;
