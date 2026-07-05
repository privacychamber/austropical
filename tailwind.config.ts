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
          // Logo Accent Colors
          green: {
            DEFAULT: "#8DC63F",
            dark: "#6FA32B",
          },
          orange: {
            DEFAULT: "#F7931E",
            dark: "#F08C3B",
          },
          blue: {
            DEFAULT: "#29ABE2",
            dark: "#1D86CB",
          },
          // Cinematic Natural Roots
          charcoal: {
            DEFAULT: "#2C2A29",
            light: "#4A4745",
          },
          ivory: {
            DEFAULT: "#F9F8F6",
            dark: "#F0EFEA",
          },
        },
      },
      fontFamily: {
        sans: ["Inter", "system-ui", "sans-serif"],
        display: ["'Playfair Display'", "Georgia", "serif"],
      },
      backgroundImage: {
        'noise-pattern': "url('/noise.png')", // Assume we will generate/use a noise image or CSS
      },
      boxShadow: {
        'ambient': '0 30px 60px -12px rgba(0, 0, 0, 0.25), 0 18px 36px -18px rgba(0, 0, 0, 0.1)',
        'contact': '0 2px 4px rgba(0,0,0,0.4)',
        'premium': '0 20px 40px rgba(0,0,0,0.08), 0 1px 3px rgba(0,0,0,0.05)',
      },
      animation: {
        "drift": "drift 20s linear infinite",
        "sway": "sway 10s ease-in-out infinite",
        "float": "float 6s ease-in-out infinite",
        "pulse-slow": "pulse 4s cubic-bezier(0.4, 0, 0.6, 1) infinite",
        "shimmer": "shimmer 8s infinite linear",
      },
      keyframes: {
        drift: {
          "0%": { transform: "translateX(0)" },
          "100%": { transform: "translateX(100px)" },
        },
        sway: {
          "0%, 100%": { transform: "rotate(-2deg)" },
          "50%": { transform: "rotate(2deg)" },
        },
        float: {
          "0%, 100%": { transform: "translateY(0px)" },
          "50%": { transform: "translateY(-15px)" },
        },
        shimmer: {
          "0%": { backgroundPosition: "0% 50%" },
          "100%": { backgroundPosition: "100% 50%" },
        }
      },
    },
  },
  plugins: [],
};
export default config;
