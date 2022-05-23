module.exports = {
  prefix: '',
  purge: {
    content: [
      './src/**/*.{html,ts,scss}',
    ]
  },
  darkMode: 'class', // or 'media' or 'class'
  theme: {
    extend: {
      colors:{
        dark: '#525252',
        light: '#e5e5e5',
      },
      fontFamily: {
        koulen: ["Montserrat", "sans-serif"]
      },
    },
  },
  variants: {
    extend: {},
  },
  plugins: [
    require('tailwind-scrollbar'),
  ]
};