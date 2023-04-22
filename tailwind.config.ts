import type { Config } from 'tailwindcss'

export default <Partial<Config>>{
  content: ['./index.html', './src/**/*.{js,ts,jsx,tsx}'],
  theme: {
    extend: {
      fontFamily: {
        insisFontMontserrat: ['Montserrat', 'sans-serif'],
        insisFontMA: ['Montserrat Alternates', 'sans-serif'],
      },
      colors: {
        insisColorGrey: '#5E4F47',
        insisColorTextGreen: '#6BA539',
        insisColorBgPink: '#EDD2C0',
        insisColorBgGreen: '#6EA03F',
      },
    },
  },
}
