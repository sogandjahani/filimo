/** @type {import('tailwindcss').Config} */
export default {
  content: [  '**.html', // فایل اصلی HTML
   './public/javascript/**.js'],
  theme: {
    extend: {
      screens:{
        mobile:"0px",
        desktop:"800px"
      },
    },
  },
  plugins: [],
}
