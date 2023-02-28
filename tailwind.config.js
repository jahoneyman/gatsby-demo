/** @type {import('tailwindcss').Config} */

module.exports = {
  content: ["./src/pages/**/*.{js,jsx,ts,tsx}", "./src/components/**/*.{js,jsx,ts,tsx}"],
  theme: {
    extend: {
      colors: {
        primary: {
          1: "#75eea5",
          2: "#f0fcec",
          3: "#1f5522",
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
          3: "#424242",
          4: "#112432",
          5: "#b2b2b2",
        },
        card: {
          0: "#1F5522",
          1: "#3D4874",
          2: "#4c4157",
          3: "#4a515d",
          4: "#5f4f5f",
          5: "#49555f",
        },
      },
      fontSize: {
        "4xl": ["2.5rem"],
        "6xl": ["4rem"],
        "7xl": ["5rem"],
        "8xl": ["6.5rem"],
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
