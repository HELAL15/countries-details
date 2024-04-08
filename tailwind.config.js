/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  darkMode: 'class', 
  theme: {
    extend: {
      container: {
        center: true,
        padding: '1rem',
      },
      colors: {
        transparent: 'transparent',
        current: 'currentColor',
        'dark-bg' : "hsl(207, 26%, 17%)",
        'dark-bg-2' : "hsl(209, 23%, 22%)",
        'white-bg' : 'hsl(0, 0%, 98%)',
        'white-bg-2' : 'hsl(0, 0%, 100%)',
        'white': '#ffffff',
      },
    },
  },
  plugins: [],
}