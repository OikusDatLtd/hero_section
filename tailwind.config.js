/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      keyframes: {
        fadeIn: {
          "0%": { opacity: "0", width: "0px" },
          "25%": { opacity: "0", width: "265px" },
          "75%":{opacity:"0", width:"465px"},
          "100%": { opacity: "1", width:"530px" },
        },
      },
      animation: {
        fadeIn: "fadeIn 0.5s ease-in forwards",
      },
    },
  },

  plugins: [],
};
