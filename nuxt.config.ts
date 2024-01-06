// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  modules: ["@vuestic/nuxt"],

  vuestic: {
    config: {
      // Config here
    },
  },

  app: {
    baseURL: "/",
    buildAssetsDir: "assets"
  },

  devtools: { enabled: true }
})
