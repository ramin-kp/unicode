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
        secondary: "#4e81fb",
      },
    },
  },
  plugins: [
    function ({ addVariant }) {
      addVariant("child", "& > *");
      addVariant("child-hover", "& > *:hover");
    },
  ],
};
