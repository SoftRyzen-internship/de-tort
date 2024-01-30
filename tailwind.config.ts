import type { Config } from "tailwindcss";

const config: Config = {
  mode: "jit",
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/sections/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/layout/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    // MEDIA QUERIES
    screens: {
      sm: "480px",
      md: "768px",
      xl: "1280px",

      xsOnly: { max: "479.98px" },
      smOnly: { max: "767.98px" },
      mdOnly: { min: "768px", max: "1279.98px" },
      notXl: { max: "1279.98px" },
    },
    // THEME
    extend: {
      // CONTAINER
      container: {
        center: true,
        padding: {
          DEFAULT: "1.25rem",
          sm: "1.25rem",
          md: "2rem",
          xl: "2rem",
        },
      },
      // COLORS
      colors: {
        "color-bg": {
          white: "#FFFFFF",
          primary: "#FFF8F2",
          hero: "#FFCFD3",
          accent: "#F5D9E2",
          extraAccent: "#FFF4CB",
        },
        "color-accent": {
          primary: "#CC1B73",
        },
        "color-text": {
          primary: "#393939",
          secondary: "#383838",
        },
        "color-option": {
          first: "#A33F06",
          second: "#A63F6B",
          third: "#381046",
          fourth: "#FEEE9F",
          fifth: "#197CCB",
          sixth: "#A9003A",
        },
      },
      // FONTS
      fontFamily: {
        unbounded: ["var(--font-unbounded)"],
        fixel: ["var(--font-fixelDisplay)"],
      },
      // TRANSITION
      transitionDuration: {
        DEFAULT: "300ms",
      },
      transitionTimingFunction: {
        DEFAULT: "cubic-bezier(0.4, 0, 0.2, 1)",
      },
    },
  },
  plugins: [],
};
export default config;
