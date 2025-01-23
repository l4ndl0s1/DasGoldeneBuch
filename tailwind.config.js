/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{html,ts}"],
  theme: {
    extend: {
      keyframes: {
        "gradient-x": {
          "0%, 100%": { "background-position": "0% center" },
          "50%": { "background-position": "100% center" },
        },
        wiggle: {
          "0%, 100%": { transform: "rotate(-3deg)" },
          "50%": { transform: "rotate(3deg)" },
        },

        "marquee-top": {
          "0%": { transform: "translateX(100%)" },
          "100%": { transform: "translateX(-100%)" },
        },

        "marquee-bottom": {
          "0%": { transform: "translateX(-100%)" },
          "100%": { transform: "translateX(100%)" },
        },
        blob: {
          "0%": {
            transform: "translate(0px, 0px) scale(1)",
          },
          "33%": {
            transform: "translate(30px, -50px) scale(1.1)",
          },
          "66%": {
            transform: "translate(-20px, 20px) scale(0.9)",
          },
          "100%": {
            transform: "translate(0px, 0px) scale(1)",
          },
        },
        marker: {
          "0%": {
            backgroundColor: "rgba(0, 0, 0, 0)",
          },
          "100%": {
            backgroundColor: "rgba(0, 0, 0, 1)",
          },
        },
      },
      animation: {
        "gradient-x": "gradient-x 5s ease infinite",
        wiggle: "wiggle 4s ease-in-out infinite",

        "marquee-top": "marquee-top 20s linear infinite",

        "marquee-bottom": "marquee-bottom 20s linear infinite",
        blob: "blob 7s infinite",
        marker: "marker 1s ease-in-out forwards",
      },
      backgroundSize: {
        200: "200% 200%",
      },
    },
  },
  plugins: [],
};
