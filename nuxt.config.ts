// https://nuxt.com/docs/api/configuration/nuxt-config
import tailwindcss from "@tailwindcss/vite";

export default defineNuxtConfig({
  devtools: { enabled: true },
  vite: {
    plugins: [
      tailwindcss(),
    ],
  },
  css: ["~/assets/app.css"],
  experimental: { appManifest: false },
  modules: ["nuxt-icon", "@nuxt/image", "@nuxt/fonts"],
  compatibilityDate: "2024-12-18",
});