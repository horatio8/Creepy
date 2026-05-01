import type { Config } from "tailwindcss";

const config: Config = {
  content: ["./src/**/*.{ts,tsx}"],
  theme: {
    extend: {
      colors: {
        // Layered darks — page → raised surfaces
        void: "#070809",
        paper: "#0d0e12",
        surface: "#16171c",
        surface2: "#1d1e25",
        cream: "#16171c", // alias of surface — quote-block background
        rule: "#2a2b34",

        // Light text on dark
        bone: "#e8e3d4",
        ink: "#e8e3d4", // alias of bone — preserves prior class names
        ash: "#a39d8d",
        meta: "#a39d8d", // alias of ash
        moss: "#6c6757",

        // Accents
        blood: "#c83a3a",
        rust: "#c83a3a", // alias of blood
        ember: "#d18250",
        bruise: "#5b3a52",
      },
      fontFamily: {
        display: [
          '"Cormorant Garamond"',
          "ui-serif",
          "Georgia",
          "serif",
        ],
        serif: [
          '"Source Serif 4"',
          '"Source Serif Pro"',
          "Georgia",
          "serif",
        ],
        sans: ['"Inter"', "ui-sans-serif", "system-ui", "sans-serif"],
      },
      maxWidth: {
        readable: "68ch",
      },
      boxShadow: {
        glow: "0 0 60px -10px rgba(200, 58, 58, 0.18)",
        plate: "0 1px 0 rgba(255, 255, 255, 0.03) inset",
        lift:
          "0 12px 32px -16px rgba(0, 0, 0, 0.7), 0 1px 0 rgba(255, 255, 255, 0.03) inset",
      },
    },
  },
  plugins: [],
};

export default config;
