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
          950: '#070709', // Deepest obsidian luxury canvas
          900: '#0c0c10', // Dark foundation surface
          850: '#121217', // Editorial panel slate
          800: '#181820', // Interactive container
          700: '#262632', // Structural borders
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
