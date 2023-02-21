/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/pages/**/*.{js,jsx,ts,tsx}", "./src/components/**/*.{js,jsx,ts,tsx}"],
  theme: {
    extend: {
      colors: {
        primary: {
          1: "#75eea5",
          2: "#f0fcec",
        },
        secondary: {
          1: "#205424",
          2: "#3d4874",
          3: "#4c4157",
          4: "#4a515d",
          5: "#5f4f5f",
        },
        accent: {
          1: "#432ba3",
        },
        gray: {
          1: "#202122",
          2: "#484444",
        },
      },
    },
    screens: {
      sm: "640px",
      md: "768px",
      lg: "1024px",
      "2lg": "1140px",
      xl: "1280px",
      "2xl": "1536px",
    },
  },
  plugins: [],
};
