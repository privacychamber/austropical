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
        background: "var(--background)",
        foreground: "var(--foreground)",
        brand: {
          purple: {
            DEFAULT: "#2A1147",
            dark: "#2A1147",
            light: "#4D2677",
          },
          orange: "#FF9F1C",
          yellow: "#FFC531",
          cream: "#FFF9F2",
          offwhite: "#FAFAFA",
          dark: "#1A1A1A",
          green: "#4F8F46",
          pink: "#E9418A",
        },
      },
      borderRadius: {
        card: "28px",
        btn: "999px",
        input: "18px",
        img: "24px",
        section: "32px",
      },
      spacing: {
        '18': '4.5rem', // 72px
        '28': '7rem',   // 112px
        '36': '9rem',   // 144px
      },
      fontFamily: {
        sans: ["General Sans", "Inter", "system-ui", "sans-serif"],
        display: ["Clash Display", "sans-serif"],
      },
      maxWidth: {
        container: "1440px",
        content: "1320px",
        text: "680px",
      },
      animation: {
        "float": "float 6s ease-in-out infinite",
        "pulse-slow": "pulse 4s cubic-bezier(0.4, 0, 0.6, 1) infinite",
        "spin-slow": "spin 20s linear infinite",
      },
      keyframes: {
        float: {
          "0%, 100%": { transform: "translateY(0px) rotate(0deg)" },
          "50%": { transform: "translateY(-15px) rotate(3deg)" },
        },
      },
    },
  },
  plugins: [],
};
export default config;
