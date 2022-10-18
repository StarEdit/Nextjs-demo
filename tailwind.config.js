/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx}",
    "./components/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        background: "#242424",
        backgroundSecond: "#343434",
        dividerColor: "#2d2d2d",
        textColor: "#a8741a",
      },
    },
  },
  plugins: [],
};
