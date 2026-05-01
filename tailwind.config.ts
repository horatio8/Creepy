import type { Config } from "tailwindcss";

const config: Config = {
  content: ["./src/**/*.{ts,tsx}"],
  theme: {
    extend: {
      colors: {
        paper: "#f5f1e8",
        ink: "#1a1a1a",
        rust: "#8b1e1e",
        cream: "#ebe4d2",
        meta: "#6b6b6b",
        rule: "#d8d2c2",
      },
      fontFamily: {
        display: ['"Marcellus"', "ui-serif", "Georgia", "serif"],
        serif: ['"Source Serif 4"', '"Source Serif Pro"', "Georgia", "serif"],
        sans: ['"Inter"', "ui-sans-serif", "system-ui", "sans-serif"],
      },
      maxWidth: {
        readable: "68ch",
      },
    },
  },
  plugins: [],
};

export default config;
