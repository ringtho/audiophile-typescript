/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    extend: {
      fontFamily: {
        sans: ['Manrope', 'sans-serif']
      }, 

      screens : {
        sm: '480px',
        md: '768px',
        lg: '1080px',
        xl: '1440px'
      },
      colors : {
        black: {
          500: '#101010',
          900: '#000000',
        },
        white : '#fff',
        orange : {
          500: '#FBAF85',
          900: '#D87D4A'
        },
        gray : {
          500: '#FAFAFA',
          900: '#F1F1F1'
        }
      },
      spacing : {
        '13px': '13px',
        '15px': '15px',
        '23px' : '23px',
        '25px': '25px',
        '42px' : '42px'
      }
    },
  },
  plugins: [],
}

