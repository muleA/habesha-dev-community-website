import { theme } from './src/shared/theme/theme';

export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  darkMode: "class",
  theme: {
    extend: {
      colors: {
        'ethiopian-green': {
          50: theme.colors.ethiopianGreen[0],
          100: theme.colors.ethiopianGreen[1],
          200: theme.colors.ethiopianGreen[2],
          300: theme.colors.ethiopianGreen[3],
          400: theme.colors.ethiopianGreen[4],
          500: theme.colors.ethiopianGreen[5],
          600: theme.colors.ethiopianGreen[6],
          700: theme.colors.ethiopianGreen[7],
          800: theme.colors.ethiopianGreen[8],
          900: theme.colors.ethiopianGreen[9],
        },
        'ethiopian-yellow': {
          50: theme.colors.ethiopianYellow[0],
          100: theme.colors.ethiopianYellow[1],
          200: theme.colors.ethiopianYellow[2],
          300: theme.colors.ethiopianYellow[3],
          400: theme.colors.ethiopianYellow[4],
          500: theme.colors.ethiopianYellow[5],
          600: theme.colors.ethiopianYellow[6],
          700: theme.colors.ethiopianYellow[7],
          800: theme.colors.ethiopianYellow[8],
          900: theme.colors.ethiopianYellow[9],
        },
        'ethiopian-red': {
          50: theme.colors.ethiopianRed[0],
          100: theme.colors.ethiopianRed[1],
          200: theme.colors.ethiopianRed[2],
          300: theme.colors.ethiopianRed[3],
          400: theme.colors.ethiopianRed[4],
          500: theme.colors.ethiopianRed[5],
          600: theme.colors.ethiopianRed[6],
          700: theme.colors.ethiopianRed[7],
          800: theme.colors.ethiopianRed[8],
          900: theme.colors.ethiopianRed[9],
        },
        
        background: {
          light: "#ffffff",
          dark: "#1a1b1e",
        },
        surface: {
          light: "#f8f9fa",
          dark: "#25262b",
        },
      },
      fontFamily: {
        sans: ['Nyala', 'Segoe UI', 'system-ui', '-apple-system', 'sans-serif'],
        heading: ['Nyala', 'Segoe UI', 'system-ui', '-apple-system', 'sans-serif'],
      },
      spacing: {
        "navbar-height": "4rem",
        "footer-height": "4rem",
      },
      fontSize: {
        "2xs": ["0.625rem", { lineHeight: "0.75rem" }],
        xs: ["0.75rem", { lineHeight: "1rem" }],
        sm: ["0.875rem", { lineHeight: "1.25rem" }],
        base: ["1rem", { lineHeight: "1.5rem" }],
        lg: ["1.125rem", { lineHeight: "1.75rem" }],
        xl: ["1.25rem", { lineHeight: "1.75rem" }],
        "2xl": ["1.5rem", { lineHeight: "2rem" }],
        "3xl": ["1.875rem", { lineHeight: "2.25rem" }],
        "4xl": ["2.25rem", { lineHeight: "2.5rem" }],
        "5xl": ["3rem", { lineHeight: "1" }],
      },
      animation: {
        "fade-in": "fade-in 0.3s ease-in-out",
        "fade-out": "fade-out 0.3s ease-in-out",
        "slide-in": "slide-in 0.3s ease-in-out",
        "slide-out": "slide-out 0.3s ease-in-out",
      },
      keyframes: {
        "fade-in": {
          "0%": { opacity: "0" },
          "100%": { opacity: "1" },
        },
        "fade-out": {
          "0%": { opacity: "1" },
          "100%": { opacity: "0" },
        },
        "slide-in": {
          "0%": { transform: "translateY(-100%)" },
          "100%": { transform: "translateY(0)" },
        },
        "slide-out": {
          "0%": { transform: "translateY(0)" },
          "100%": { transform: "translateY(-100%)" },
        },
      },
      boxShadow: theme.other.boxShadow,
      borderRadius: theme.other.borderRadius,
    },
  },
  plugins: [
    require("@tailwindcss/typography"),
    require("@tailwindcss/forms"),
    require("@tailwindcss/aspect-ratio"),
  ],
};