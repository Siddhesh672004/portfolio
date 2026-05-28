/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{js,jsx}"],
  mode: "jit",
  theme: {
    extend: {
      colors: {
        primary: "#050508",
        secondary: "#8A8A9A",
        tertiary: "#0D0D14",
        accent: "#00F5D4",
        "accent-2": "#FF6B35",
        "accent-3": "#7C3AED",
        surface: "#0D0D14",
        "surface-2": "#12121C",
        "text-primary": "#F0F0F0",
        "text-secondary": "#8A8A9A",
        "black-100": "#0A0A12",
        "black-200": "#06060B",
        "white-100": "#F0F0F0",
      },
      fontFamily: {
        syne: ["Syne", "sans-serif"],
        sans: ["DM Sans", "system-ui", "sans-serif"],
        mono: ["JetBrains Mono", "monospace"],
        display: ["Syne", "sans-serif"],
      },
      boxShadow: {
        card: "0 24px 80px -24px rgba(0,245,212,0.12)",
        "glow-cyan": "0 0 40px rgba(0,245,212,0.18)",
        "glow-orange": "0 0 40px rgba(255,107,53,0.18)",
      },
      screens: {
        xs: "450px",
      },
      backgroundImage: {
        "hero-pattern": "url('/src/assets/herobg.png')",
        "black-gradient": "linear-gradient(135deg, #0D0D14, #050508)",
        "cyan-gradient": "linear-gradient(135deg, #00F5D4, #7C3AED)",
        "grid-faint":
          "linear-gradient(rgba(255,255,255,0.04) 1px, transparent 1px), linear-gradient(90deg, rgba(255,255,255,0.04) 1px, transparent 1px)",
      },
      backgroundSize: {
        grid: "48px 48px",
      },
      keyframes: {
        marquee: {
          "0%": { transform: "translateX(0)" },
          "100%": { transform: "translateX(-50%)" },
        },
        "marquee-reverse": {
          "0%": { transform: "translateX(-50%)" },
          "100%": { transform: "translateX(0)" },
        },
        "pulse-dot": {
          "0%, 100%": { opacity: 1, transform: "scale(1)" },
          "50%": { opacity: 0.4, transform: "scale(1.3)" },
        },
        "blob-drift": {
          "0%, 100%": { transform: "translate(0,0) scale(1)" },
          "33%": { transform: "translate(30px,-20px) scale(1.05)" },
          "66%": { transform: "translate(-20px,30px) scale(0.95)" },
        },
        "fade-up": {
          "0%": { opacity: 0, transform: "translateY(20px)" },
          "100%": { opacity: 1, transform: "translateY(0)" },
        },
        "underline-grow": {
          "0%": { width: "0%" },
          "100%": { width: "100%" },
        },
      },
      animation: {
        marquee: "marquee 40s linear infinite",
        "marquee-reverse": "marquee-reverse 40s linear infinite",
        "pulse-dot": "pulse-dot 1.8s ease-in-out infinite",
        "blob-drift": "blob-drift 14s ease-in-out infinite",
        "fade-up": "fade-up 0.8s ease-out forwards",
      },
    },
  },
  plugins: [],
};
