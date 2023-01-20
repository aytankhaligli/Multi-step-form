/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      height: {
        128: "600px",
      },
      width: {
        70: "274px",
        80: "342px",
      },
      padding: {
        25: "100px",
      },
    },
    container: {
      center: true,
    },
    screens: {
      sm: "412px",
      md: "768px",

      lg: "1024px",

      xl: "1280px",

      "2xl": "1536px",
    },
    colors: {
      "marine-blue": "hsl(213, 96%, 18%)",
      "purplish-blue": "hsl(243, 100%, 62%)",
      "pastel-blue": "hsl(228, 100%, 84%)",
      "light-blue": "hsl(206, 94%, 87%)",
      "strawberry-red": "hsl(354, 84%, 57%)",
      "cool-gray": "hsl(231, 11%, 63%)",
      "light-gray": " hsl(229, 24%, 87%)",
      magnolia: "hsl(217, 100%, 97%)",
      alabaster: " hsl(231, 100%, 99%)",
      white: " hsl(0, 0%, 100%)",
      black: "#000",
    },
  },
  plugins: [],
};
