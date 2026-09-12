import type { Config } from 'tailwindcss'

const config: Config = {
  content: [
    './app/**/*.{js,ts,jsx,tsx,mdx}',
    './components/**/*.{js,ts,jsx,tsx,mdx}',
    './lib/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    extend: {
      fontFamily: {
        serif: ['var(--font-cormorant)', 'Cormorant Garamond', 'Georgia', 'serif'],
        sans: ['var(--font-jakarta)', 'Plus Jakarta Sans', 'Inter', 'system-ui', 'sans-serif'],
        mono: ['var(--font-jetbrains)', 'JetBrains Mono', 'Menlo', 'monospace'],
      },
      colors: {
        noir: {
          950: '#060609', // Deepest obsidian luxury canvas
          900: '#0a0a0f', // Dark foundation surface
          850: '#101017', // Editorial panel slate
          800: '#161622', // Interactive container
          700: '#222230', // Structural borders
        },
        obsidian: {
          950: '#040406',
          900: '#07070a',
          850: '#0c0c12',
          800: '#12121a',
          700: '#1c1c28',
        },
        ruby: {
          950: '#2c040e',
          900: '#4c0519',
          800: '#881337', // Deep velvet wine
          700: '#9f1239',
          600: '#be123c', // Seductive statement ruby
          500: '#e11d48', // Luminous glow crimson
          400: '#fb7185',
        },
        gold: {
          300: '#f3e5ab',
          400: '#e5c07b',
          500: '#d4af37', // Signature Warm Champagne Gold
          600: '#c5a059',
          700: '#99732e',
          900: '#46320d',
        },
        parchment: {
          50: '#fbfaf7',
          100: '#f5f3ed',
          200: '#ebe6db',
          300: '#ddd5c5',
          400: '#c5baa6',
          500: '#a89c85',
        },
        carmine: {
          500: '#ef4444',
          600: '#dc2626', // Signature statement red
          700: '#b91c1c',
          900: '#450a0a',
          950: '#2b0606',
        },
        cobalt: {
          400: '#60a5fa',
          500: '#3b82f6',
          600: '#2563eb', // Intellectual deep blue
          700: '#1d4ed8',
          900: '#1e3a8a',
          950: '#0f172a',
        },
      },
      boxShadow: {
        'glow-ruby': '0 0 50px -10px rgba(225, 29, 72, 0.35)',
        'glow-wine': '0 0 60px -15px rgba(136, 19, 55, 0.45)',
        'glow-gold': '0 0 40px -10px rgba(212, 175, 55, 0.25)',
        'card-seductive': '0 20px 40px -15px rgba(0, 0, 0, 0.7), 0 0 30px -10px rgba(190, 18, 60, 0.15)',
      },
      letterSpacing: {
        'luxury': '0.22em',
        'masthead': '0.3em',
        'tight-editorial': '-0.03em',
      },
      animation: {
        'fade-in': 'fadeIn 0.6s cubic-bezier(0.16, 1, 0.3, 1) forwards',
        'slide-up': 'slideUp 0.6s cubic-bezier(0.16, 1, 0.3, 1) forwards',
        'pulse-subtle': 'pulseSubtle 3s ease-in-out infinite',
      },
      keyframes: {
        fadeIn: {
          '0%': { opacity: '0' },
          '100%': { opacity: '1' },
        },
        slideUp: {
          '0%': { opacity: '0', transform: 'translateY(16px)' },
          '100%': { opacity: '1', transform: 'translateY(0)' },
        },
        pulseSubtle: {
          '0%, 100%': { opacity: '1' },
          '50%': { opacity: '0.4' },
        },
      },
    },
  },
  plugins: [],
}

export default config
