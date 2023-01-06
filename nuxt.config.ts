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
      meta: [
        {charset: "utf-8"},
        {name: "viewport", content: "width=device-width"}
      ],
      link: [
        {rel: "icon", type: "image/x-icon", href: "favicon.ico"},
        {rel: "stylesheet" , href: "https://cdn.jsdelivr.net/gh/filipelinhares/ress@latest/dist/ress.min.css"}
      ],
    }
  }
})