export default defineNuxtConfig({
  devtools: { enabled: true },
  app: {
    head: {
      link: [
        { rel: 'icon', type: 'image/x-icon', href: '/favicon.ico' },
      ],
    },
  },
  components: [
    { path: '~/components', pathPrefix: false },
  ],
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

  // Environment variables — see .env.example for all required vars
  runtimeConfig: {
    // Server-only
    payhereSecret:  '',
    jwtSecret:      '',
    mysqlHost:      'localhost',
    mysqlPort:      '3306',
    mysqlUser:      '',
    mysqlPassword:  '',
    mysqlDatabase:  '',
    public: {
      // Client-accessible
      payhereMerchantId: '',
      payhereMode: 'sandbox',
    },
  },
})
