/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,jsx}",
  ],
  theme: {
    extend: {
       fontFamily: {
    heading: ["Orbitron", "sans-serif"],
    body: ["Inter", "sans-serif"],
  },
      colors: {
  primary: "#06b6d4",     // neon cyan
  secondary: "#f43f5e",   // neon pink/red contrast
  background: "#020617",
  card: "rgba(15, 23, 42, 0.8)",
},
boxShadow: {
  glow: "0 0 20px rgba(6, 182, 212, 0.6)",
},
    },
  },
  plugins: [],
};

