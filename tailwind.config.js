/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        'navy-dark': '#0B1120',
        'navy-light': '#1E293B',
      },
      animation: {
        'star-movement': 'star-movement 5s linear infinite',
      },
      keyframes: {
        'star-movement': {
          '0%': { transform: 'translateY(-50%) translateX(-50%) rotate(0deg)' },
          '100%': { transform: 'translateY(-50%) translateX(-50%) rotate(360deg)' },
        }
      }
    },
  },
  plugins: [],
}
