/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    './app/**/*.{js,ts,jsx,tsx,mdx}',
    './components/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    extend: {
      fontFamily: {
        sans: ['Space Grotesk', 'system-ui', 'sans-serif'],
      },
      colors: {
        tron: {
          dark: '#0a0a0a',
          darker: '#050505',
          grid: '#1a1a1a',
          red: '#ff0040',
          'red-glow': '#e63946',
          accent: '#dc2626',
          'red-dim': '#8b0000',
        },
      },
      animation: {
        'pulse-glow': 'pulseGlow 2s cubic-bezier(0.4, 0, 0.6, 1) infinite',
        'fade-in': 'fadeIn 0.6s ease-out',
        'slide-up': 'slideUp 0.6s ease-out',
        'glow': 'glow 2s ease-in-out infinite alternate',
      },
      keyframes: {
        pulseGlow: {
          '0%, 100%': {
            opacity: '1',
            boxShadow: '0 0 20px rgba(255, 0, 64, 0.5)',
          },
          '50%': {
            opacity: '0.8',
            boxShadow: '0 0 30px rgba(255, 0, 64, 0.8)',
          },
        },
        fadeIn: {
          '0%': {
            opacity: '0',
          },
          '100%': {
            opacity: '1',
          },
        },
        slideUp: {
          '0%': {
            opacity: '0',
            transform: 'translateY(20px)',
          },
          '100%': {
            opacity: '1',
            transform: 'translateY(0)',
          },
        },
        glow: {
          '0%': {
            boxShadow: '0 0 5px rgba(255, 0, 64, 0.2), 0 0 10px rgba(255, 0, 64, 0.2)',
          },
          '100%': {
            boxShadow: '0 0 10px rgba(255, 0, 64, 0.4), 0 0 20px rgba(255, 0, 64, 0.4), 0 0 30px rgba(255, 0, 64, 0.3)',
          },
        },
      },
      boxShadow: {
        'tron-glow': '0 0 20px rgba(255, 0, 64, 0.5)',
        'tron-glow-lg': '0 0 30px rgba(255, 0, 64, 0.6), 0 0 60px rgba(255, 0, 64, 0.4)',
      },
    },
  },
}
