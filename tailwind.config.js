/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    extend: {
      backgroundImage: {
        "form-header": "url('/src/assets/images/header-day.1565fc4e.jpg')"
      }
    },
  },
  plugins: [],
}