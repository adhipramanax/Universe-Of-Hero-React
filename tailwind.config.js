/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{html,js}",
    "./src/**/*.{js,jsx,ts,tsx}",
    "node_modules/flowbite-react/**/*.{js,jsx,ts,tsx}",
  ],

  theme: {
    extend: {
      screens: {
        tablet: "640px",
        // => @media (min-width: 640px) { ... }

        laptop: "1024px",
        // => @media (min-width: 1024px) { ... }

        desktop: "1280px",
        // => @media (min-width: 1280px) { ... }
      },
      fontFamily: {
        poppins: ["Poppins", "sans-serif"],
      },
      colors: {
        one: "#B8180A",
        two: "#16151D",
        three: "#222222",
        four: "#C4C4C4",
      },
      container: {},
    },
    screens: {
      xsm: "480px",
      sm: "640px",
      md: "768px",
      "2md": "960px",
      lg: "1024px",
      xl: "1200px",
      "2xl": "1440px",
    },
  },
  plugins: ["flowbite/plugin"],
};
