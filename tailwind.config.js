/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        primary: "#3b82f6", // Tailwind's default blue-500
        primaryHover: "#2563eb", // Tailwind's default blue-600
      },
    },
  },
  plugins: [
    require('tailwind-scrollbar')({ nocompatible: true }),  ],
}