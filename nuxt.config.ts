// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  compatibilityDate: '2024-11-01',
  devtools: { enabled: true },
  css: ['~/assets/css/main.css'],

  app: {
    head: {
      title: "ShopCard",
    },
  },

  postcss: {
    plugins: {
      tailwindcss: {},
      autoprefixer: {},
    },
  },

  fonts: [
    {
      family: 'SFPro',
      src: [
        {
          url: '/fonts/SFProDisplay-Medium.woff2',
          weight: '500',
        },
        {
          url: '/fonts/SFProDisplay-Semibold.woff2',
          weight: '600',
        },
      ],
    },
    {
      family: 'Helvetica Neue',
      src: [
        {
          url: '/fonts/HelveticaNeueCyr-Light.woff2',
          weight: '300',
        },
      ],
    }
  ],

  modules: ['@nuxt/fonts'],
})
