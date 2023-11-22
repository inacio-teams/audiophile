import type { Config } from "tailwindcss";
import plugin from 'tailwindcss/plugin'

export default <Partial<Config>>{
  theme: {
    extend: {
      fontFamily: {
        sans: ['Manrope']
      },
      colors: {
        primary: "hsl(22 65% 57% / <alpha-value>)",
      },
    },
  },
  plugins: [
    plugin(({ addUtilities }) => {
      addUtilities({
        '.grid-stack': {
          display: 'grid',
          'grid-template-areas': "'stack'",
        },
        '.grid-stack > *': {
          'grid-area': 'stack',
        },
      })
    }),
  ],
};
