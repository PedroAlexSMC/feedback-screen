/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{js,jsx,ts,tsx}"],
  theme: {
    colors: {
      "primary-orange": "hsl(25, 97%, 53%)",
      white: "hsl(0, 0%, 100%)",
      "light-Grey": "hsl(217, 12%, 63%)",
      "medium-grey": "hsl(216, 12%, 54%)",
      "dark-blue": "hsl(213, 19%, 18%)",
      "very-dark-blue": "hsl(216, 12%, 8%)",
    },
    screens: {
      sm: "375px",
      md: "768px",
      lg: "1440px",
      xl: "1280px",
      "2xl": "1536px",
    },
    fontFamily: {
      sans: ["Overpass"],
    },
    fontSize: {
      base: ["15px"],
      lg: ["25px"],
    },
    fontWeight: {
      normal: "400",
      bold: "700",
    },
    boxShadow: {
      sm: [
        "0px 0px 3.3px rgba(0, 0, 0, 0.077)",
        "0px 0px 9px rgba(0, 0, 0, 0.11)",
        "0px 0px 21.7px rgba(0, 0, 0, 0.143)",
        "0px 0px 72px rgba(0, 0, 0, 0.22)",
      ],
    },
    extend: {},
  },
  plugins: [],
};
