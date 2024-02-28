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
      boxShadow: {
        xl: "-3px 3px 0px 0px #CC1B73",
        "2xl": "-4px 4px 0px 0px #CC1B73",
        "3xl": "-7px 7px 0px 0px #CC1B73",
        "3xl-a": "-7px 7px 0px 0px #F6B5CA",
        "3xl-map-a": "-7px 7px 0px 0px #F7E6D8",
        "3xl-map-b": "-7px 7px 0px 0px #F6B5CA",
        "topping-plate": "12px 12px 27px 0 rgba(0, 0, 0, 0.2);",
        "topping-plate-md": "13px 13px 28px 0 rgba(0, 0, 0, 0.2);",
        "topping-plate-xl": "14px 14px 30px 0 rgba(0, 0, 0, 0.2);",
      },
      // COLORS
      colors: {
        "color-bg": {
          white: "#FFFFFF",
          primary: "#FFF8F2",
          hero: "#FFCFD3",
          dead: "#F8F8F8",
          accent: "#F5D9E2",
          grey: "#EFEFEF",
          extraAccent: "#FFF4CB",
          backdrop: "rgba(0, 0, 0, 0.66)",
          cakeLine: "rgba(0, 0, 0, 0.2)",
        },
        "color-accent": {
          primary: "#CC1B73",
        },
        "color-text": {
          primary: "#393939",
          secondary: "#383838",
        },
        "color-option": {
          first: "#A9003A",
          second: "#A63F6B",
          third: "#381046",
          fourth: "#FEEE9F",
          fifth: "#197CCB",
          sixth: "#A33F06",
          seven: "#5B4BFF",
          eight: "#626262",
          nine: "#683DD2",
          ten: "#5A4BFF",
        },
        "color-border-map-a": "#D1B9A4",
        "color-border-map-b": "#CC1B73",
        "topping-card": {
          odd: "#8AC4DA",
          even: "#EFA7C4",
        },
        "disabled-bg": "#F8F8F8",
        silver: "#ACACAC",
        alto: "#CECECE",
        mine: "#383838",
        error: "#EF5A5A",
        success: "#4caf50",
        gallery: "#EAEAEA",
      },
      background: {
        gradient: "linear-gradient(180deg, #683DD2 0%, #5A4BFF 100%)",
      },
      border: {
        color: "linear-gradient(180deg, #683DD2 0%, #5A4BFF 100%)",
      },
      // FONTS
      fontFamily: {
        unbounded: ["var(--font-unbounded)"],
        fixel: ["var(--font-fixelDisplay)"],
      },
      lineHeight: {
        base: "1.2",
        normal: "1.4",
      },
      letterSpacing: {
        base: ".04em",
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
  plugins: [require("@tailwindcss/typography")],
};
export default config;
