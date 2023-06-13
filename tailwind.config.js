const plugin = require("tailwindcss/plugin");
const defaultTheme = require("tailwindcss/defaultTheme");

/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [`./src/pages/**/*.{js,jsx,ts,tsx}`, `./src/components/**/*.{js,jsx,ts,tsx}`],
  darkMode: ["class"],
  theme: {
    extend: {
      colors: {
        light: {
          DEFAULT: "#FFFFFF",
        },
        dark: {
          DEFAULT: "#000000",
        },
        onLight: {
          DEFAULT: "#000000",
        },
        onDark: {
          DEFAULT: "#FFFFFF",
        },
      },
      fontFamily: {
        sans: ["Inter var", ...defaultTheme.fontFamily.sans],
      },
      boxShadow: {
        DEFAULT: "4px 4px 0px #000000",
        md: "6px 6px 0px #000000",
        lg: "8px 8px 0px #000000",
        "secondary-sm": "-4px -4px 0px #000000",
        "secondary-md": "-6px -6px 0px #000000",
        "secondary-lg": "-8px -8px 0px #000000",
      },
      boxShadowColor: {
        onLight: "#000000",
        onDark: "rgba(255, 255, 255, 0.35)",
      },
      borderRadius: { xs: "0.0625rem" },
      maxWidth: {
        "8xl": "1440px",
      },
    },
  },
  plugins: [
    plugin(function ({ addVariant }) {
      addVariant("hocus", ["&:hover", "&:focus"]);
      addVariant("group-hocus", [".group:hover &", ".group:focus &"]);
      addVariant("hotive", ["&:hover", "&:active"]);
      addVariant("group-hotive", [".group:hover &", ".group:active &"]);
    }),
  ],
};
