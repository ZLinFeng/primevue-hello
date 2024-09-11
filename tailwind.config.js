/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{vue,js,ts,jsx,tsx}"
  ],
  theme: {
    fontFamily: {
      "serif": ["ui-serif", "Georgia"]
    },
    extend: {},
  },
  plugins: [
    //require("tailwindcss-highlights"),
  ],
}

