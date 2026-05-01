import type { Config } from "tailwindcss";

const config: Config = {
  content: ["./src/**/*.{ts,tsx}"],
  theme: {
    extend: {
      colors: {
        // Layered navy darks — page → raised surfaces
        void: "#10142a",
        paper: "#161b34",
        surface: "#1d233e",
        surface2: "#262d4a",
        cream: "#1d233e", // alias of surface — quote-block background
        rule: "#2a3050",

        // Light text on dark
        bone: "#f5f1e8",
        ink: "#f5f1e8", // alias of bone
        ash: "#a4a5b4",
        meta: "#a4a5b4", // alias of ash
        moss: "#6b6e83",

        // Accents
        blood: "#e3505a",
        rust: "#e3505a", // alias of blood
        ember: "#f0a370",
        bruise: "#5b3a52",

        // Light surfaces (for the "as reported by" strip)
        bonePaper: "#f5f1e8",
      },
      fontFamily: {
        display: ['"Inter"', "ui-sans-serif", "system-ui", "sans-serif"],
        gothic: ['"Cormorant Garamond"', "ui-serif", "Georgia", "serif"],
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
      backgroundImage: {
        "name-grad":
          "linear-gradient(95deg, #ff8e9b 0%, #ffb085 50%, #ffd9a3 100%)",
      },
      boxShadow: {
        glow: "0 0 60px -10px rgba(227, 80, 90, 0.18)",
        plate: "0 1px 0 rgba(255, 255, 255, 0.04) inset",
        lift:
          "0 12px 32px -16px rgba(0, 0, 0, 0.7), 0 1px 0 rgba(255, 255, 255, 0.04) inset",
      },
    },
  },
  plugins: [],
};

export default config;
