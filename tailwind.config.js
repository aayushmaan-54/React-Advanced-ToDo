/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      fontFamily: {
        'VarFont': ['Roboto Flex', 'sans-serif'],
      },
      backgroundImage: {
        'gridBg': 'url("./src/Assets/grids.svg")',
        'gradBlob': 'url("./src/Assets/gradBlob.svg")'
      },
    },
  },
  plugins: [
    require('tailwind-scrollbar'),
  ],
}