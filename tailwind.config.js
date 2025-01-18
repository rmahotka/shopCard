/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./components/**/*.{js,vue,ts}",
    "./layouts/**/*.vue",
    "./pages/**/*.vue",
    "./plugins/**/*.{js,ts}",
    "./app.vue",
    "./error.vue",
  ],
  theme: {
    extend: {
      textColor: {
        grayCustom: {
          DEFAULT: '#252525',
          op: '#252525CC',
        },
        blackCustom: {
          DEFAULT: '#1D1D1D',
          op: '#1D1D1DB2'
        },
      },
      backgroundColor: {
        grayCustom100:{
          DEFAULT: '#F6F6F6',
        },
      },
    },
    fontFamily: {
      'description' : ['Helvetica Neue','sans-serif']
    }
  },
  plugins: [],
}
