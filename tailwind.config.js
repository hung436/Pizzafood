/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
    "node_modules/flowbite-react/**/*.{js,jsx,ts,tsx}",
    // "./node_modules/react-tailwindcss-select/dist/index.esm.js",
  ],
  theme: {
    extend: {
      colors: {
        "lightBlue-500": "#03A9F4",
        "lightBlue-600": "#039BE5",
        "blueGray-700": "#455A64",
        "blueGray-500": "#607D8B",
        "blueGray-300": "#90A4AE",
        "blueGray-100": "#CFD8DC",
      },
    },
  },
  daisyui: {
    themes: false,
  },
  plugins: [require("flowbite/plugin"), require("daisyui")],
};
