import type { Config } from 'tailwindcss'
import defaultTheme from 'tailwindcss/defaultTheme'
import plugin from 'tailwindcss/plugin'

export default <Partial<Config>>{
  content: ['./src/**/*.{html,js,jsx,md,mdx,svelte,ts,tsx,vue}'],
  theme: {
    extend: {
      fontFamily: {
        sans: ['Manrope', ...defaultTheme.fontFamily.sans],
      },
      colors: {
        brand: {
          caramel: '#D87D4A',
          night: '#101010',
          flash: '#F1F1F1',
          seasalt: '#FAFAFA',
          tangerine: '#FBAF85',
          black: '#000000',
        },
        slate: {
          light: {
            1: '#fcfcfd',
            2: '#f9f9fb',
            3: '#f2f2f5',
            4: '#ebebef',
            5: '#e4e4e9',
            6: '#dddde3',
            7: '#d3d4db',
            8: '#b9bbc6',
            9: '#8b8d98',
            10: '#7e808a',
            11: '#60646c',
            12: '#1c2024',
          },
          dark: {
            1: '#18181a',
            2: '#1b1b1f',
            3: '#27282d',
            4: '#2e3035',
            5: '#35373c',
            6: '#3c3f44',
            7: '#464b50',
            8: '#5a6165',
            9: '#696e77',
            10: '#7d828a',
            11: '#adb1b8',
            12: '#edeef0',
          },
        },
      },
    },
    plugins: [
      plugin(function ({ theme, addUtilities }) {
        addUtilities({
          '.heading-1': {
            fontSize: '56px',
            lineHeight: '58px',
            fontWeight: '700',
            color: theme('colors.black'),
            textTransform: 'uppercase',
          },
          '.heading-2': {
            fontSize: '2.5rem',
            lineHeight: '3rem',
            fontWeight: '500',
            letterSpacing: '3rem',
            color: theme('colors.black'),
          },
          '.heading-3': {
            fontSize: '1.25rem',
            lineHeight: '1.625rem',
            letterSpacing: '0.3125rem',
            fontWeight: '500',
            textTransform: 'uppercase',
          },
        })

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
  },
}
