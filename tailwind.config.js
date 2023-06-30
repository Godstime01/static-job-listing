/** @type {import('tailwindcss').Config} */
export default {
  content: ["./src/**/*.{html,jsx}", "./index.html"],
  theme: {
    colors : {
      "cyan" : {
        100 : "hsl(180, 52%, 96%)",
        200 : "hsl(180, 31%, 95%)",
        300 : "hsl(180, 8%, 52%)",
        400 : "hsl(180, 29%, 50%)",
        500 : "hsl(180, 14%, 20%)"
      }
    },
    extend: {},
  },
  plugins: [],
}

