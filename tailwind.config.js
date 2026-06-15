/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        // A punchy neon green to contrast the dark theme
        brand: '#ccff00', 
      }
    },
  },
  plugins: [],
}
