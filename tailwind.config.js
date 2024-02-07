/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './src/**/*.{js,ts,jsx,tsx}'],
  theme: {
    extend: {
      gridTemplateColumns: {
        'product-cards': 'repeat(auto-fit, minmax(225px, 1fr))',
      },
    },
  },
  plugins: [],
};
