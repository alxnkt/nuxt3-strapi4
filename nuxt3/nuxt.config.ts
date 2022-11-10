// https://v3.nuxtjs.org/api/configuration/nuxt.config
export default defineNuxtConfig({
  typescript: {
    strict: true
  },
  modules: ['@nuxtjs/strapi'],
  strapi: {
    // entities: ['restaurants', 'categories'],
    url: 'http://localhost:1337'
  },
})
