/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [ './src/**/*.tsx' ],
  theme: {
    fontSize: {
      'sm' : 12,
      'md' : 14,
      'lg' : 16,
      'xl' : 25.59,
    },
    colors: {
      'green': '#00875F',
      'green-light': '#00B37E',
      'gray1' : '#121214',
      'gray2' : '#202024',
      'gray3' : '#323238',
      'gray4' : '#7C7C8A',
      'gray5' : '#8D8D99',
      'gray6' : '#C4C4CC',
      'gray7' : '#E1E1E6',
      'white' : '#FFFFFF',
      'red-danger' : '#F75A68',
    },
    extend: {
      fontFamily: {
        sans: 'Roboto, sans-serif'
      },
      backgroundImage: {
        'capa': "url('assets/capa-img.jpg')",
      }
    },
  },
  plugins: [],
}
