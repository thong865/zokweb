// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  devServer: {
    port: 8000
  },
  devtools: { enabled: true },
  modules: [
    '@element-plus/nuxt'
  ],
  elementPlus: { /** Options */ }
})
