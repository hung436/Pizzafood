/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
    "node_modules/flowbite-react/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        "lightBlue-500": "#03A9F4",
        "lightBlue-600": "#039BE5",
        "blueGray-700": "#455A64",
        "blueGray-500": "#607D8B",
        "blueGray-300": "#90A4AE",
      },
    },
  },
  plugins: [require("flowbite/plugin")],
};
