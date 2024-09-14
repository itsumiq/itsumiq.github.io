/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      fontSize: {
        'lg': '1.125rem',
        '4xl': '2.5rem',
      },
      colors: {
        black: {
          primary: '#090909',
          secondary: '#131313',
          
        },
        gray: {
          primary: '#565656',
          light: '#AAAAAA',
          dark: '#242424',
        },
        milk: '#FAFAFA',
        pink: '#CF73C6',
        white: {
          DEFAULT: '#FFFFFF',
          light: '#E6E6E6',
      },
      },
      fontFamily: {
        main: 'Geist',
      },
      transitionProperty: {
        textStatus: 'color, text-decoration-line, background-color, border-color, text-decoration-color',
      },
    },
  },
  darkMode: 'selector',
  plugins: [],
}

