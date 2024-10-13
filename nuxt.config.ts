// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  compatibilityDate: '2024-04-03',
  app: {
    head: {
      htmlAttrs: {
        lang: 'en',
      },
      link: [{ rel: "icon", type: "image/x-icon", href: "/favicon.ico" }],
      script: [
        { defer: true, src: "https://cloud.umami.is/script.js", "data-website-id": "e05f579d-b02e-4db9-a0fa-16946f08f77d" }
      ]
    },
  },
  devtools: { enabled: true },
  modules: [
    '@nuxtjs/tailwindcss',
    'shadcn-nuxt',
    '@nuxtjs/color-mode',
    '@nuxt/fonts',
    '@nuxt/icon',
    'nuxt-gtag',
  ],
  colorMode: {
    classSuffix: '',
  },
  shadcn: {
    /**
     * Prefix for all the imported component
     */
    prefix: '',
    /**
     * Directory that the component lives in.
     * @default "./components/ui"
     */
    componentDir: './components/ui',
  },
  gtag: {
    // enabled: process.env.NODE_ENV === 'production',
  },
})