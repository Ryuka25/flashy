// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  compatibilityDate: "2024-04-03",
  app: {
    head: {
      htmlAttrs: {
        lang: "en",
      },
      link: [{ rel: "icon", type: "image/x-icon", href: "/favicon.ico" }],
      script: [
        {
          defer: true,
          src: "https://cloud.umami.is/script.js",
          "data-website-id": "e05f579d-b02e-4db9-a0fa-16946f08f77d",
        },
        {
          defer: true,
          src: "https://static.cloudflareinsights.com/beacon.min.js",
          "data-cf-beacon": '{"token": "97be209b562347b1a3d75c422f0f9221"}',
        },
      ],
      meta: [
        {
          name: "google-site-verification",
          content: "DYA2yBPp7veNqsgCMTJMXnwF9lUfI4HUOhvJM5hZUgs",
        },
      ],
    },
  },
  devtools: { enabled: true },
  modules: [
    "@nuxtjs/tailwindcss",
    "shadcn-nuxt",
    "@nuxtjs/color-mode",
    "@nuxt/fonts",
    "@nuxt/icon",
    "@nuxt/scripts",
    "@nuxtjs/turnstile",
  ],
  turnstile: {
    // Check for local test: https://developers.cloudflare.com/turnstile/troubleshooting/testing/
    siteKey: "0x4AAAAAAAx0B3KeeFZOsh_P",
  },
  colorMode: {
    classSuffix: "",
  },
  shadcn: {
    /**
     * Prefix for all the imported component
     */
    prefix: "",
    /**
     * Directory that the component lives in.
     * @default "./components/ui"
     */
    componentDir: "./components/ui",
  },
});
