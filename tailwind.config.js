/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      colors: {
        primary: "#113207",
        secondary: "#1a4d1a",
        accent: "#06b6d4",
        "accent-dark": "#0891b2",
        "accent-light": "#22d3ee",
        "orange-accent": "#f6931b",
        "orange-accent-dark": "#d97706",
      },
      animation: {
        "fade-in": "fadeIn 0.6s ease-in-out",
        "slide-up": "slideUp 0.6s ease-out",
        "slide-down": "slideDown 0.5s ease-out",
        "slide-left": "slideLeft 0.5s ease-out",
        "slide-right": "slideRight 0.5s ease-out",
        "scale-in": "scaleIn 0.5s ease-out",
        "bounce-light": "bounceLight 2s ease-in-out infinite",
        glow: "glow 2s ease-in-out infinite",
        "pulse-glow": "pulseGlow 2s ease-in-out infinite",
      },
      keyframes: {
        fadeIn: {
          "0%": { opacity: "0" },
          "100%": { opacity: "1" },
        },
        slideUp: {
          "0%": { transform: "translateY(30px)", opacity: "0" },
          "100%": { transform: "translateY(0)", opacity: "1" },
        },
        slideDown: {
          "0%": { transform: "translateY(-30px)", opacity: "0" },
          "100%": { transform: "translateY(0)", opacity: "1" },
        },
        slideLeft: {
          "0%": { transform: "translateX(30px)", opacity: "0" },
          "100%": { transform: "translateX(0)", opacity: "1" },
        },
        slideRight: {
          "0%": { transform: "translateX(-30px)", opacity: "0" },
          "100%": { transform: "translateX(0)", opacity: "1" },
        },
        scaleIn: {
          "0%": { transform: "scale(0.95)", opacity: "0" },
          "100%": { transform: "scale(1)", opacity: "1" },
        },
        bounceLight: {
          "0%, 100%": { transform: "translateY(0)" },
          "50%": { transform: "translateY(-10px)" },
        },
        glow: {
          "0%, 100%": { boxShadow: "0 0 20px rgba(246, 147, 27, 0.3)" },
          "50%": { boxShadow: "0 0 40px rgba(246, 147, 27, 0.6)" },
        },
        pulseGlow: {
          "0%, 100%": {
            opacity: "1",
            boxShadow: "0 0 20px rgba(246, 147, 27, 0.3)",
          },
          "50%": {
            opacity: "0.8",
            boxShadow: "0 0 30px rgba(246, 147, 27, 0.5)",
          },
        },
      },
    },
  },
  plugins: [],
};
