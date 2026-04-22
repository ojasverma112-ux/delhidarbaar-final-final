/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        luxury: {
          900: '#060403', // Deepest background
          800: '#0f0b08', // Surface background
          gold: '#e8c678', // Premium bright gold
          goldDark: '#b89445',
          ivory: '#fcfaf8',
          muted: '#c2b6a9',
        }
      },
      fontFamily: {
        heading: ['Cormorant Garamond', 'serif'],
        body: ['Inter', 'sans-serif'],
      },
      boxShadow: {
        'anti-gravity': '0 20px 40px -10px rgba(0, 0, 0, 0.7), inset 0 1px 0 rgba(255, 255, 255, 0.1)',
        'glow-gold': '0 0 20px rgba(232, 198, 120, 0.15)',
      },
      backgroundImage: {
        'glass-gradient': 'linear-gradient(145deg, rgba(255,255,255,0.05) 0%, rgba(255,255,255,0.01) 100%)',
      }
    },
  },
  plugins: [],
}
