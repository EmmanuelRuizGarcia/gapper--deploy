/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      fontFamily: {
        WorkSans: "Work Sans",
      },
      colors: {
        backgroundMenu: "#434E85", 
        primaryMenu: "#3E82FC",
        hrFooter: "#434E85",
        backgroundScrollBar: "#434E85",
        backgroundScrollBarTrack: "#232a50",
        'gapper-color-footer': "#242C53",
        'gapper-color-AboutUs': "#242C53",
        'gapper-color-Cotiza-Contrata': "#242C53",
        'gapper-color-Boton-Cortizar': "#D86527",
      },
      backgroundImage: {
        HeroHome: "url('assets/bgHeaderHome.png')",
      },
    },
  },
  plugins: [
    require('tailwind-scrollbar')({ nocompatible: true })
  ],
  variants: {
    scrollbar: ['rounded']
  }
}

