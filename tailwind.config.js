/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    fontFamily: {
      rozha: ["rozha", "serif"],
      inter: ["inter", "sans-serif"],
    },
    extend: {
      colors: {
        "dark-green": "#152705",
        green: "#30580F",
        "light-green": "#E2F3E3",
        cream: "#fffefd",
        "light-purple": "#F7EDFF",
      },
    },
  },
  plugins: [],
};
