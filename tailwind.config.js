/** @type {import('tailwindcss').Config} */

export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
    "node_modules/flowbite-react/lib/esm/**/*.js",
  ],
  theme: {
    extend: {
      colors: {
      customBlue: "#003f8f",
      customBackground: '#00118F',
    },},
  },
  plugins: [require("flowbite/plugin")],
};


