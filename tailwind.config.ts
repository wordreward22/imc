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
        cummins: {
          red: "#E2231B",
          "red-dark": "#9E0202",
          "red-light": "#FF3B30",
        },
        imc: {
          dark: "#0F172A",
          darker: "#0A0F1D",
          navy: "#1E293B",
          gray: "#334155",
          light: "#F8FAFC",
          accent: "#E2231B",
          gold: "#F59E0B",
        },
      },
      fontFamily: {
        sans: ["var(--font-poppins)", "var(--font-roboto)", "sans-serif"],
        heading: ["var(--font-montserrat)", "var(--font-poppins)", "sans-serif"],
        arabic: ["var(--font-cairo)", "sans-serif"],
      },
      boxShadow: {
        card: "0 10px 30px -5px rgba(0, 0, 0, 0.08)",
        "card-hover": "0 20px 40px -10px rgba(218, 41, 28, 0.15)",
        header: "0 4px 20px rgba(0, 0, 0, 0.06)",
      },
    },
  },
  plugins: [],
};

export default config;
