/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        'dark-bg': '#000000',
        'darker-bg': '#000000',
        'card-bg': 'rgba(15, 15, 15, 0.8)',
        'neon-blue': '#00f3ff',
        'neon-pink': '#D71DA3',
        'neon-purple': '#b967ff',
        'text-light': '#e0e0ff',
        'text-muted': '#a0a0c0',
      },
      fontFamily: {
        'orbitron': ['Orbitron', 'sans-serif'],
        'exo': ['Exo 2', 'sans-serif'],
      },
      boxShadow: {
        'glow-blue': '0 0 15px rgba(0, 243, 255, 0.7)',
        'glow-pink': '0 0 15px rgba(215, 29, 163, 0.5)',
        'glow-blue-lg': '0 0 25px rgba(0, 243, 255, 0.7)',
        'glow-blue-xl': '0 0 30px rgba(0, 243, 255, 0.7)',
      },
      keyframes: {
        float: {
          '0%, 100%': { transform: 'translateY(0px)' },
          '50%': { transform: 'translateY(-20px)' },
        },
      },
      animation: {
        float: 'float 6s ease-in-out infinite',
        'float-slow': 'float 7s ease-in-out infinite',
      },
    },
  },
  plugins: [],
}
