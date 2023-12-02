// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  devtools: { enabled: true },
  srcDir: 'src/',
  modules: ['@nuxtjs/tailwindcss', '@nuxtjs/google-fonts'],
  googleFonts: {
    families: {
      Manrope: [300, 400, 500, 600, 700, 800],
    },
  },
})
