import type { Config } from 'tailwindcss';

const config: Config = {
  content: [
    './pages/**/*.{js,ts,jsx,tsx,mdx}',
    './components/**/*.{js,ts,jsx,tsx,mdx}',
    './app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    extend: {
      colors: {
        navy: {
          50: '#EEF2FA',
          100: '#D5DFF0',
          200: '#ABBFE1',
          300: '#7F9CCE',
          400: '#547AB8',
          500: '#3A5E9E',
          600: '#2C4A7E',
          700: '#1E355E',
          800: '#162B52',
          900: '#0B1D3A',
          950: '#060E1E',
        },
        gold: {
          50: '#FEF7E6',
          100: '#FDECC0',
          200: '#FAD97E',
          300: '#F5BE3E',
          400: '#E8A81E',
          500: '#C8962E',
          600: '#A87920',
          700: '#875E16',
          800: '#66460F',
          900: '#462F09',
        },
        cream: '#FBF9F6',
      },
      fontFamily: {
        sans: ['var(--font-inter)', 'system-ui', 'sans-serif'],
      },
      animation: {
        float: 'float 3s ease-in-out infinite',
        'pulse-ring': 'pulse-ring 2s cubic-bezier(0.4, 0, 0.6, 1) infinite',
      },
      keyframes: {
        float: {
          '0%, 100%': { transform: 'translateY(0px)' },
          '50%': { transform: 'translateY(-6px)' },
        },
        'pulse-ring': {
          '0%': { boxShadow: '0 0 0 0 rgba(37, 211, 102, 0.5)' },
          '70%': { boxShadow: '0 0 0 14px rgba(37, 211, 102, 0)' },
          '100%': { boxShadow: '0 0 0 0 rgba(37, 211, 102, 0)' },
        },
      },
    },
  },
  plugins: [],
};

export default config;
