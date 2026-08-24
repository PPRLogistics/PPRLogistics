/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ['./index.html', './src/**/*.{js,jsx,ts,tsx}'],
  theme: {
    extend: {
      colors: {
        // Remap the default blue palette to an orange spectrum so existing "blue-*" utilities render orange
        blue: {
          50: '#fff6ef',
          100: '#ffeeda',
          200: '#ffd6bc',
          300: '#ffb88a',
          400: '#ff9a56',
          500: '#F45B0A', // primary
          600: '#FF6A00', // bright / hover
          700: '#C2410C',
          800: '#9A2E08',
          900: '#7A2006',
        },
        // Named primary palette for semantic use
        primary: {
          DEFAULT: '#F45B0A',
          light: '#FF9A56',
          bright: '#FF6A00',
          dark: '#C2410C',
        },
        // Dark navy tones
        'navy-dark': '#071329',
        'navy-deep': '#0B1730',
      },
    },
  },
  plugins: [],
};
