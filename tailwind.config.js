/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      boxShadow: {
        fade :" 3px 2px 12px 1px rgba(128, 128, 128, 0.1)"
      },
      keyframes: {
        fadeIn: {
          "0%": { opacity: "0", width: "0px" },
          "25%": { opacity: "0", width: "265px" },
          "75%": { opacity: "0", width: "465px" },
          "100%": { opacity: "1", width: "530px" },
        },
        stack: {
          "0%, 100%": { zIndex: 10 },
          "50%": { zIndex: 0 },
        },
      },
      animation: {
        fadeIn: "fadeIn 0.5s ease-in forwards",
        stack: "stack 4s infinite ",
      },
    },
  },

  plugins: [],
};
