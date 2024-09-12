/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      fontSize: {
        '4xl': '2.5rem',
      },
      colors: {
        black: {
          primary: '#090909',
        },
      },
    },
  },
  darkMode: 'selector',
  plugins: [],
}

