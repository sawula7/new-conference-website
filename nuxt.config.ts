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

  // PayHere credentials — set via environment variables
  // Server-only (secret):  NUXT_PAYHERE_SECRET=<your_merchant_secret>
  // Public (merchant id):  NUXT_PUBLIC_PAYHERE_MERCHANT_ID=<your_merchant_id>
  // Public (mode):         NUXT_PUBLIC_PAYHERE_MODE=live   (default: sandbox)
  runtimeConfig: {
    payhereSecret: '',
    public: {
      payhereMerchantId: '',
      payhereMode: 'sandbox',
    },
  },
})
