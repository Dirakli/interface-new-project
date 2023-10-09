/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend:
    {
      screens: {
       "md": "800px"
        
      },
      backgroundImage: {
        'background': "url('/assets/background/background.jpg')",
      }
    },
    fontFamily: {
      'libre-franklin': ['LibreFranklin', 'sans'],
      'archivo': ['Archivo', 'sans'],
      'nunito': ['nunito', 'sans-serif'],
    }
  },
  plugins: [
    require('tailwind-scrollbar'),
  ],
  spacing: {
    '256': '64rem',
    '550': '35rem'
  }
}

