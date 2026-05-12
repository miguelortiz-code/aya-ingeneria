/** @type {import('tailwindcss').Config} */
export default {
  darkMode: 'class',
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      colors: {
        navy: {
          900: '#060E1F',
          800: '#0A1628',
          700: '#0D2040',
          600: '#162B55',
        },
        solar: {
          300: '#81D4FA',
          400: '#29B6F6',
          500: '#1565C0',
          600: '#0D47A1',
        },
        sky: {
          400: '#38BDF8',
          500: '#0EA5E9',
          600: '#0284C7',
        },
        eco: {
          400: '#66BB6A',
          500: '#43A047',
        },
        brand: {
          400: '#1976D2',
          500: '#1565C0',
          600: '#0D47A1',
        },
      },
      fontFamily: {
        display: ['Bebas Neue', 'sans-serif'],
        heading: ['Syne', 'sans-serif'],
        body: ['DM Sans', 'sans-serif'],
      },
      backgroundImage: {
        'solar-gradient': 'linear-gradient(160deg, #FFFFFF 0%, #EFF6FF 50%, #E0F2FE 100%)',
        'solar-gradient-dark': 'linear-gradient(160deg, #060E1F 0%, #0A1628 60%, #0D2040 100%)',
      },
      animation: {
        'fade-up':    'fadeUp 0.6s ease-out forwards',
        'fade-in':    'fadeIn 0.8s ease-out forwards',
        'slide-right':'slideRight 0.6s ease-out forwards',
        'glow-pulse': 'glowPulse 3s ease-in-out infinite',
        'float':      'float 6s ease-in-out infinite',
        'spin-slow':  'spin 20s linear infinite',
      },
      keyframes: {
        fadeUp: {
          '0%':   { opacity: '0', transform: 'translateY(30px)' },
          '100%': { opacity: '1', transform: 'translateY(0)' },
        },
        fadeIn: {
          '0%':   { opacity: '0' },
          '100%': { opacity: '1' },
        },
        slideRight: {
          '0%':   { opacity: '0', transform: 'translateX(-30px)' },
          '100%': { opacity: '1', transform: 'translateX(0)' },
        },
        glowPulse: {
          '0%, 100%': { boxShadow: '0 0 20px rgba(21,101,192,0.25)' },
          '50%':      { boxShadow: '0 0 40px rgba(21,101,192,0.50)' },
        },
        float: {
          '0%, 100%': { transform: 'translateY(0px)' },
          '50%':      { transform: 'translateY(-10px)' },
        },
      },
      boxShadow: {
        'solar':      '0 0 30px rgba(21,101,192,0.25)',
        'solar-lg':   '0 0 60px rgba(21,101,192,0.35)',
        'card':       '0 4px 24px rgba(0,0,0,0.08)',
        'card-hover': '0 8px 40px rgba(21,101,192,0.15)',
      },
    },
  },
  plugins: [],
}