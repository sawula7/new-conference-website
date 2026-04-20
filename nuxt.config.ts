export default defineNuxtConfig({
  devtools: { enabled: true },
  modules: [
    '@nuxtjs/tailwindcss',
    '@nuxtjs/google-fonts',
  ],
  googleFonts: {
    families: {
      Poppins: [300, 400, 500, 600, 700, 800],
      Inter: [300, 400, 500, 600],
    },
    display: 'swap',
  },
  css: ['~/assets/css/main.css'],
})
