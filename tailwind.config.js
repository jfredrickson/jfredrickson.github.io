/** @type {import('tailwindcss').Config} */
module.exports = {
  darkMode: 'class',
  content: [
    './content/**/*.{html,js}',
    './layouts/**/*.{html,js}',
  ],
  theme: {
    extend: {},
    backgroundImage: {
      home: 'linear-gradient(to bottom, rgba(0, 0, 0, 0.6), transparent, transparent, transparent), url("/images/oranjestad.jpg")',
    },
    container: {
      center: true,
      padding: '1rem',
    },
    fontFamily: {
      'sans': ['Inter', 'Helvetica Neue', 'sans-serif'],
      'serif': ['Charter', 'serif'],
      'mono': ['monospace'],
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
