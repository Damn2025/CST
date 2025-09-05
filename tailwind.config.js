/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './src/**/*.{js,ts,jsx,tsx}'],
  theme: {
    extend: {
      fontFamily: {
        inter: ['Inter', 'sans-serif'],
      },
      screens: {
        xs: '480px',
      },
      animation: {
        'infinite-scroll': 'infinite-scroll var(--duration) linear infinite',
      },
       keyframes: {
        'infinite-scroll': {
          from: { transform: 'translateX(0)' },
          to: { transform: 'translateX(-100%)' },
        },
      },
    },
  },
  plugins: [],
};

 
