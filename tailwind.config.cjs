/** @type {import('tailwindcss').Config} */
module.exports = {
  darkMode: 'class',
  content: ["./index.html", "./src/views/*.html","./src/controllers/home.controller.js"],
  theme: {
    screens: {
      'md': [
        {'min': '540px'}
      ]
    },
    extend: {
      backgroundImage: {
        menu: "url('./menus.png')",
        apps: "url('./apps.png')",
        microphone: "url('./microp.png')",
        loupe: "url('./busqueda.png')"
      },
      colors: {
        gooText: "#70757A",
        footer: "#F2F2F2",
        under: "#54B2FB",
        dark: {
          25: '#F8F9FA',
          50:'#8EA0A6',
          100: '#303134',
          200: '#202124',
          300: '#171717',
        }
      },
      fontFamily: {
        'roboto': ['Roboto', 'sans-serif']
      }
    },
  },
  plugins: [],
};
