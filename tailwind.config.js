/** @type {import('tailwindcss').Config} */
export default {
    content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
    "./node_modules/tw-elements-react/dist/js/**/*.js"
  ],
  theme: {
    extend: {
      colors:{
        prple: "#7C39FF",
        tx: '#A0A0A0',
        drk: '#111111',
        brdrB: '#333333',
        brdrW: '#E6E3E3',
        sh: '#535353',
      }
    },
  },
  darkMode: "class",
  plugins: [require("tw-elements-react/dist/plugin.cjs")]
}

