/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
    "./public/index.html",
  ],
  theme: {
    extend: {
      colors: {
        'taxi-yellow': '#FFD700',
        'taxi-yellow-light': '#FFED4A',
        'taxi-yellow-dark': '#F59E0B',
        'taxi-navy': '#1E3A8A',
        'taxi-navy-light': '#3B82F6',
        'taxi-navy-dark': '#1E40AF',
        'taxi-black': '#1F2937',
        'taxi-gray': '#6B7280',
        'taxi-gray-light': '#F3F4F6',
        'taxi-white': '#FFFFFF',
        'taxi-orange': '#F97316',
        'taxi-green': '#10B981',
      },
    },
  },
  plugins: [],
}