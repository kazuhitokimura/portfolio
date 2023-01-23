// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  vite: {
    css: {
      preprocessorOptions: {
        scss: {
          additionalData: '@use "@/assets/_index.scss" as *;'
        }
      }
    }
  },
  app: {
    head: {
      title: "kazuhitokimura",
      charset: "utf-8",
      viewport: "width=device-width",
      meta: [
        { name: 'description', content: '木村一仁のポートフォリオ' },
        { hid: 'og:image', property: 'og:image', content: '' }
      ],
      link: [
        { rel: "icon", type: "image/png", href: "/favicon.png" },
        { rel: "stylesheet" , href: "https://cdn.jsdelivr.net/gh/filipelinhares/ress@latest/dist/ress.min.css" },
        { rel: "stylesheet" , href: "https://fonts.googleapis.com/css2?family=Material+Symbols+Outlined:opsz,wght,FILL,GRAD@20..48,100..700,0..1,-50..200" },
      ],
  }
  },
  build: {
    transpile: ['components']
  },
})