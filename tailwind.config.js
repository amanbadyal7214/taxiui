/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
    "./public/index.html",
  ],
  theme: {
    extend: {
      colors: {
        'taxi-purple': '#4a1a8a',
        'taxi-yellow': '#fbbf24',
      },
    },
  },
  plugins: [],
}