/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  darkMode: "class",
  theme: {
    extend: {
      fontFamily: {
        danaLight: "danaLight",
        dana: "dana",
        danaMedium: "danaMedium",
        danaBold: "danaBold",
        danaDemiBold: "danaDemiBold",
        morabbaMedium: "morabbaMedium",
        morabbaBold: "morabbaBold",
      },
      colors: {
        black: {
          100: "#4a4b6d",
          200: "#3c3f58",
          300: "#32334d",
          400: "#28293d",
          500: "#1c1c28",
        },
        primary: "#2ed573",
        secondary: {
          100: "#3A58A7",
          200: "#30457C",
          300: "#4e81fb",
          400: "#3F6CD8",
          500: "#4A507C",
          600: "#94A3B8",
          700: "#21263E",
        },
      },

      spacing: {
        25: "6.25rem",
      },
      container: {
        center: true,
        padding: {
          DEFAULT: "1.25rem",
          lg: "0.625rem",
        },
      },
    },
    screens: {
      xs: "480px",

      sm: "640px",

      md: "768px",

      lg: "1024px",

      xl: "1280px",

      "2xl": "1536px",
    },
  },
  plugins: [
    function ({ addVariant }) {
      addVariant("child", "& > *");
      addVariant("child-hover", "& > *:hover");
    },
  ],
};
