import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        // Primary brand greens
        forest: {
          50:  "#f0faf0",
          100: "#d9f2d9",
          200: "#b3e5b3",
          300: "#7dce7d",
          400: "#4db04d",
          500: "#2d8c2d",
          600: "#1f6e1f",
          700: "#175217",
          800: "#113b11",
          900: "#0b260b",
        },
        // Warm accent
        amber: {
          400: "#FBBF24",
          500: "#F59E0B",
        },
        // Neutral stone
        stone: {
          50:  "#fafaf9",
          100: "#f5f5f4",
          200: "#e7e5e4",
          500: "#78716c",
          700: "#44403c",
          900: "#1c1917",
        },
      },
      fontFamily: {
        // Display: Playfair for headings — editorial, trustworthy
        display: ["'Playfair Display'", "Georgia", "serif"],
        // Body: DM Sans — clean, modern, accessible
        sans: ["'DM Sans'", "system-ui", "sans-serif"],
      },
      boxShadow: {
        card: "0 2px 16px 0 rgba(0,0,0,0.07)",
        "card-hover": "0 6px 32px 0 rgba(0,0,0,0.13)",
      },
      borderRadius: {
        xl: "1rem",
        "2xl": "1.5rem",
        "3xl": "2rem",
      },
    },
  },
  plugins: [],
};

export default config;