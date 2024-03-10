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
        //scheme options separated by one line
        
        // "primary": "#f2aa4cff",
        // "text": "#FFFFFF",
        // "theme": "#101820ff"
      }
  },
  plugins: [],
};
export default config;
