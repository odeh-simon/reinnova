/** @type {import('tailwindcss').Config} */
export default {
    content: [
      "./index.html",
      "./src/**/*.{js,ts,jsx,tsx}",
    ],
    theme: {
      extend: {
        fontFamily: {
          montserrat: ['Montserrat', 'sans-serif'],
          poppins: ['Poppins', 'sans-serif'],
          RocknRollOne: ['RocknRollOne', 'sans-serif'],
        },
      spacing: {
          '3': '12px',
          '6': '24px',
        },
        boxShadow: {
          custom: '7px 7px 12px 7px rgba(1, 110, 151, 0.70)',
        },
      },
    },
    plugins: [],
  }
  
  