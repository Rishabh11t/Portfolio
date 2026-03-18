/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,jsx}",
  ],
  theme: {
    extend: {
      colors: {
        primary: "#113642",
        secondary: "#6366f1",
        background: "#020617",
        card: "rgba(255,255,255,0.05)",
      },
      boxShadow: {
        glow: "0 0 25px rgba(21, 22, 128, 0.3)",
      },
    },
  },
  plugins: [],
};