// tailwind.config.js
module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    extend: {
      fontFamily: {
        Gilroy: ['Gilroy', 'sans-serif'],

        
      },
    },
    container: {
      padding: {
        DEFAULT: '1rem',
        // sm: '2rem',
        // lg: '4rem',
        // xl: '5rem',
        // '2xl': '6rem',
      },
    },
    show: {
      true: 'block',
      false: 'none',
    },
  },
  plugins: [],
}
