/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      colors: {
        background: "#16181E",
        "background-secondary": "#21242D",
        "text-color": "#d5d9e2",
        "border-color": "#343946",
      },
      fontFamily: {
        bebas: ["Bebas Neue", "sans-serif"],
        body: ["Lato", "sans-serif"],
      },
      brightness: {
        65: 0.65,
      },
      keyframes: {
        fadeIn: {
          "0%": { opacity: "0", transform: "translateY(-10px)" },
          "100%": { opacity: "1" },
        },
      },
      animation: { fadeIn: "fadeIn .8s ease-in-out" },
    },
  },
  plugins: [],
};
