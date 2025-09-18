import tailwindcss from '@tailwindcss/vite';
export default defineNuxtConfig({
  compatibilityDate: '2025-05-15',
  ssr: false,
  app: {
    baseURL: '/nuxt-korean-practice/',
    buildAssetsDir: 'assets/',
  },
  
  devtools: { enabled: false },
  modules: ['@nuxtjs/tailwindcss'],
  css: ['@/assets/styles/main.scss'],
  vite: {
    css: {
      preprocessorOptions: {
        scss: {
          additionalData: '@use "@/assets/styles/variables.scss" as *;',
        },
      },
    },
    plugins: [tailwindcss()],
  },
});
