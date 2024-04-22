/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {},
    fontFamily: {
      'body': ['"Open Sans"']
    }
  },
  daisyui: {
    themes: ["light","cupcake", "dark", "cmyk","night","dracula"],
  },
  plugins: [require("daisyui")],
}
