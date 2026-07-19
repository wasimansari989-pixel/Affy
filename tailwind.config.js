/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        cream: {
          DEFAULT: '#FAF8F5',
          light: '#FDFBF9',
          50: '#FAF8F5',
          100: '#F5EFEB',
        },
        brand: {
          brown: '#2C2422',
          dark: '#1C1514',
          gray: '#6B5E5A',
        },
        gold: {
          DEFAULT: '#C5A880',
          dark: '#937854',
          light: '#DFCFB8',
          accent: '#D4AF37',
        },
        accent: '#D4AF37',
        luxury: {
          white: '#FDF8F4',
          cream: '#FAF0E6',
          pearl: '#F5EDE0',
          champagne: '#F7E7CE',
          gold: '#C5A880',
          'gold-dark': '#937854',
          'gold-light': '#DFCFB8',
          'rose-gold': '#D4A093',
          beige: '#E8DCCC',
          'warm-beige': '#F0E6D8',
          brown: '#2C2422',
          dark: '#1C1514',
          gray: '#6B5E5A',
          'trans-white': 'rgba(255,255,255,0.08)',
        },
      },
      fontFamily: {
        display: ['"Playfair Display"', 'serif'],
        'display-alt': ['"Cormorant Garamond"', 'serif'],
        sans: ['Inter', 'ui-sans-serif', 'system-ui', 'sans-serif'],
        mono: ['"JetBrains Mono"', 'ui-monospace', 'monospace'],
      },
      borderRadius: {
        glass: '50px',
      },
      backdropBlur: {
        glass: '40px',
      },
      animation: {
        'float': 'float 6s ease-in-out infinite',
        'float-slow': 'float-slow 8s ease-in-out infinite',
        'float-delayed': 'float-delayed 7s ease-in-out infinite',
        'shine': 'shine 4s ease-in-out infinite',
        'pulse-soft': 'pulse-soft 3s ease-in-out infinite',
        'drift': 'drift 20s ease-in-out infinite',
        'drift-reverse': 'drift-reverse 25s ease-in-out infinite',
      },
      keyframes: {
        float: {
          '0%, 100%': { transform: 'translateY(0px)' },
          '50%': { transform: 'translateY(-20px)' },
        },
        'float-slow': {
          '0%, 100%': { transform: 'translateY(0px) scale(1)' },
          '50%': { transform: 'translateY(-30px) scale(1.02)' },
        },
        'float-delayed': {
          '0%, 100%': { transform: 'translateY(0px)' },
          '50%': { transform: 'translateY(-15px)' },
        },
        shine: {
          '0%': { transform: 'translateX(-100%) skewX(-15deg)' },
          '50%': { transform: 'translateX(100%) skewX(-15deg)' },
          '100%': { transform: 'translateX(200%) skewX(-15deg)' },
        },
        'pulse-soft': {
          '0%, 100%': { opacity: '0.4' },
          '50%': { opacity: '0.8' },
        },
        drift: {
          '0%, 100%': { transform: 'translate(0, 0)' },
          '25%': { transform: 'translate(30px, -20px)' },
          '50%': { transform: 'translate(-20px, 10px)' },
          '75%': { transform: 'translate(15px, -10px)' },
        },
        'drift-reverse': {
          '0%, 100%': { transform: 'translate(0, 0)' },
          '25%': { transform: 'translate(-25px, 15px)' },
          '50%': { transform: 'translate(20px, -15px)' },
          '75%': { transform: 'translate(-10px, 20px)' },
        },
      },
      boxShadow: {
        'glass': '0 8px 32px rgba(0,0,0,0.08), inset 0 1px 0 rgba(255,255,255,0.5), inset 0 -1px 0 rgba(255,255,255,0.1)',
        'glass-lg': '0 30px 80px rgba(0,0,0,0.12), inset 0 1px 0 rgba(255,255,255,0.6), inset 0 -2px 0 rgba(255,255,255,0.15)',
        'glass-xl': '0 40px 120px rgba(0,0,0,0.15), inset 0 1px 0 rgba(255,255,255,0.7), inset 0 -3px 0 rgba(255,255,255,0.2)',
        'gold': '0 4px 20px rgba(197,168,128,0.3)',
        'gold-lg': '0 8px 40px rgba(197,168,128,0.2)',
      },
    },
  },
  plugins: [],
}
