/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './src/**/*.{js,ts,jsx,tsx}'],
  theme: {
    extend: {
      backgroundImage: {
        'gradient-to-b-slate':
          'linear-gradient(to bottom, rgba(107, 114, 128, 1), rgba(107, 114, 128, 0.2))',
      },
    },
  },
  plugins: [],
}
