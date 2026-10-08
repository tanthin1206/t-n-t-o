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
        noir: {
          950: "#05070a",
          900: "#0a0f16",
          850: "#0f1622",
          800: "#152030",
          700: "#1e2e44",
          600: "#2b405e",
          500: "#3d5a82",
        },
        tanao: {
          crimson: "#d92027",
          amber: "#f2a359",
          slate: "#8ca0ba",
          warning: "#ff5722",
          border: "#1f2937",
        }
      },
      fontFamily: {
        sans: ["var(--font-inter)", "sans-serif"],
        mono: ["var(--font-mono)", "monospace"],
      },
      keyframes: {
        glitch: {
          "0%, 100%": { opacity: "1" },
          "50%": { opacity: "0.95" },
        },
        pulseGlow: {
          "0%, 100%": { opacity: "0.4" },
          "50%": { opacity: "0.8" },
        },
        flicker: {
          "0%, 100%": { opacity: "1" },
          "33%": { opacity: "0.7" },
          "55%": { opacity: "0.9" },
          "70%": { opacity: "0.4" },
          "85%": { opacity: "0.85" },
        }
      },
      animation: {
        glitch: "glitch 0.2s cubic-bezier(.25, .46, .45, .94) both infinite",
        pulseGlow: "pulseGlow 2.5s ease-in-out infinite",
        flicker: "flicker 4s infinite",
      }
    },
  },
  plugins: [],
};
export default config;
