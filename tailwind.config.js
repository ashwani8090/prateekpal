/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  darkMode: 'class',
  theme: {
    extend: {
      colors: {
        legal: {
          navy: '#0B1B36',
          navyDark: '#071329',
          navyDeep: '#050D1C',
          gold: '#C5A880',
          goldDark: '#A68452',
          goldLight: '#E8D7B8',
          goldWarm: '#DCC39A',
          cream: '#FAF9F6',
        }
      },
      fontFamily: {
        serif: ['"Lora"', 'Georgia', 'serif'],
        sans: ['"Plus Jakarta Sans"', 'system-ui', '-apple-system', 'sans-serif'],
      }
    },
  },
  plugins: [],
}
