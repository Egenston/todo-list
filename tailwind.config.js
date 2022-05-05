module.exports = {
  prefix: '',
  purge: {
    content: [
      './src/**/*.{html,ts}',
    ]
  },
  darkMode: 'class', // or 'media' or 'class'
  theme: {
    extend: {
      fontFamily: {
        koulen: ["Montserrat", "sans-serif"]
      },
    },
  },
  variants: {
    extend: {},
  }
};