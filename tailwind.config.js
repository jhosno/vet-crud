const defaultTheme = require('tailwindcss/defaultTheme')
module.exports = {
  //Remover estilos que no estemos utilizando en los archivos index.html 
  //y en todos (**) los directorios hijos de /src/ con extensión *.{jsx}
  purge: ["./index.html", "./src/**/*.{jsx}"],
  darkMode: false, // or 'media' or 'class'
  theme: {
    screens: {
      'xs': '320px',
      ...defaultTheme.screens,
    },
    extend: {},
  },
  variants: {
    extend: {},
  },
  plugins: [],
}
