/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    fontFamily: {
      rozha: ['"Rozha One"', "serif"],
      inter: ["Inter", "sans-serif"],
    },
    extend: {
      colors: {
        "dark-green": "#152705",
        green: "#30580F",
        "light-green": "#E2F3E3",
        cream: "#FCF8FF",
        "light-purple": "#F7EDFF",
      },
    },
  },
  plugins: [],
};
