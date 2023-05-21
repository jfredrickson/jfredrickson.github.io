/** @type {import('tailwindcss').Config} */

const colors = require('tailwindcss/colors');

module.exports = {
  darkMode: 'class',
  content: [
    './content/**/*.{html,js}',
    './themes/default/layouts/**/*.{html,js}',
    './themes/retro/layouts/**/*.{html,js}',
    './themes/default/assets/**/*.{css,js}',
    './themes/retro/assets/**/*.{css,js}',
  ],
  theme: {
    extend: {
      colors: {
        primary: colors.sky,
        secondary: colors.emerald,
        accent: colors.orange,
      },
      backgroundImage: {
        home: 'linear-gradient(to bottom, rgba(0, 0, 0, 0.3), transparent, transparent, transparent), linear-gradient(to top, rgba(0, 0, 0, 0.6), transparent, transparent, transparent), url("/images/glacierpoint.jpg")',
        retro: 'url("/images/texture2.gif")',
      },
    },
    container: {
      center: true,
      padding: '1rem',
    },
    fontFamily: {
      'sans': ['Inter', 'Helvetica Neue', 'sans-serif'],
      'serif': ['Charter', 'serif'],
      'mono': ['monospace'],
      'serif-retro': ['Times New Roman', 'Times', 'PT Serif', 'serif'],
    },
    fontSize: {
      'xs': '0.75rem',
      'sm': '0.875rem',
      'base': '1rem',
      'lg': '1.125rem',
      'xl': '1.25rem',
      '2xl': '1.5rem',
      '3xl': '1.625rem',
      '4xl': '2rem',
    },
    screens: {
      'sm': '640px',
      'md': '768px',
      'lg': '1024px',
      'xl': '1280px',
    }
  },
  plugins: [],
}
