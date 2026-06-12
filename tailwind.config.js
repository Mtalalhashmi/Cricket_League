/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  darkMode: "class",
  theme: {
    extend: {
      colors: {
        primary: "#ffe4af",
        "primary-fixed": "#ffdf9e",
        "primary-fixed-dim": "#fabd00",
        "primary-container": "#ffc107",
        "primary-fixed-variant": "#5b4300",

        secondary: "#ffb5a0",
        "secondary-container": "#d73b00",

        tertiary: "#aef2ff",
        "tertiary-fixed": "#00dff8",
        "tertiary-fixed-dim": "#00daf3",

        background: "#131314",
        surface: "#131314",
        "surface-container": "#201f20",
        "surface-container-high": "#2a2a2b",
        "surface-container-low": "#1c1b1c",
        "surface-container-lowest": "#0e0e0f",
        "surface-container-highest": "#353436",
        "surface-tint": "#fabd00",
        "surface-variant": "#353436",

        "on-surface": "#e5e2e3",
        "on-surface-variant": "#d4c5ab",
        "on-tertiary": "#00363d",
        "on-tertiary-fixed": "#004f58",

        "on-primary": "#3f2e00",
        "on-primary-fixed": "#261a00",
        "on-primary-container": "#6d5100",
        "on-primary-fixed-variant": "#5b4300",

        "on-tertiary-container": "#005e6a",
        "on-tertiary-fixed-variant": "#004f58",

        "on-secondary": "#5f1500",
        "on-secondary-fixed": "#3b0900",
        "on-secondary-fixed-variant": "#862200",
        "on-secondary-container": "#fffbff",

        outline: "#9c8f78",
      },
      borderRadius: {
        DEFAULT: "0.125rem",
        lg: "0.25rem",
        xl: "0.5rem",
        full: "0.75rem",
      },
      fontFamily: {
        "font-display-lg": ["anybody"],
        "display-lg": ["anybody"],
        "label-caps": ["jetbrainsMono"],
        "headline-lg": ["anybody"],
        "headline-md": ["anybody"],
        "body-lg": ["hankenGrotesk"],
        "body-md": ["hankenGrotesk"],
      },
      fontSize: {
        "label-caps": ["12px", { lineHeight: "1.0", letterSpacing: "0.1em", fontWeight: "500" }],
        "headline-md": ["24px", { lineHeight: "1.3", fontWeight: "600" }],
        "headline-lg": ["48px", { lineHeight: "1.2", letterSpacing: "0.02em", fontWeight: "700" }],
        "body-lg": ["18px", { lineHeight: "1.6", fontWeight: "400" }],
        "body-md": ["16px", { lineHeight: "1.6", fontWeight: "400" }],
        "headline-lg-mobile": ["32px", { lineHeight: "1.2", fontWeight: "700" }],
        "display-lg": ["72px", { lineHeight: "1.1", letterSpacing: "-0.02em", fontWeight: "800" }],
      },
      spacing: {
        "margin-desktop": "64px",
        gutter: "32px",
        "container-max": "1440px",
        "margin-mobile": "20px",
        base: "8px",
      },
      maxWidth: {
        "container-max": "1440px",
      },
      padding: {
        base: "8px",
        gutter: "32px",
      },
    },
  },
  plugins: [],
};

