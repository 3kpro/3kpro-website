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
        primary: {
          50: '#fef2f2',
          100: '#fee2e2',
          200: '#fecaca',
          300: '#fca5a5',
          400: '#f87171',
          500: '#e07856',  // Main coral/salmon
          600: '#d16946',
          700: '#b85a3a',
          800: '#9a4b2f',
          900: '#7c3d25',
        },
        dark: {
          50: '#f8fafc',
          100: '#f1f5f9',
          200: '#e2e8f0',
          300: '#cbd5e1',
          400: '#94a3b8',
          500: '#64748b',
          600: '#475569',
          700: '#334155',
          800: '#1e293b',  // Card background
          900: '#0f172a',  // Main dark background
        },
      },
      animation: {
        'pulse-glow': 'pulseGlow 2s cubic-bezier(0.4, 0, 0.6, 1) infinite',
        'fade-in': 'fadeIn 0.6s ease-out',
        'slide-up': 'slideUp 0.6s ease-out',
        'glow': 'glow 2s ease-in-out infinite alternate',
        aurora: "aurora 60s linear infinite",
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
        aurora: {
          from: {
            backgroundPosition: "50% 50%, 50% 50%",
          },
          to: {
            backgroundPosition: "350% 50%, 350% 50%",
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
