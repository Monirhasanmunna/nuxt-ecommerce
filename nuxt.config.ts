// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  modules: ['@pinia/nuxt', '@formkit/nuxt'],

  formkit: {
    // Experimental support for auto loading (see note):
    autoImport: true
  },
  
  devtools: { enabled: true },
  css: [
    '~/assets/css/animate.css',
    '~/assets/css/bootstrap.css',
    '~/assets/css/flex-slider.min.css',
    '~/assets/css/font-awesome.css',
    '~/assets/css/jquery-ui.css',
    '~/assets/css/magnific-popup.css',
    '~/assets/css/magnific-popup.min.css',
    '~/assets/css/nice-select.css',
    '~/assets/css/niceselect.css',
    '~/assets/css/owl-carousel.css',
    '~/assets/css/reset.css',
    '~/assets/css/responsive.css',
    '~/assets/css/slicknav.min.css',
    '~/assets/css/themify-icons.css',
    '~/assets/css/style.css',
    '~/assets/css/myStyle.css',
  ],

  app: {
    head: {
      link: [
        {rel: 'stylesheet', href: 'https://cdnjs.cloudflare.com/ajax/libs/font-awesome/6.5.1/css/all.min.css'},
        {rel: 'stylesheet', href: 'https://cdn.jsdelivr.net/npm/bootstrap@5.3.3/dist/css/bootstrap.min.css'},
      ],

      script: [
        {src: "https://cdn.jsdelivr.net/npm/@popperjs/core@2.11.8/dist/umd/popper.min.js", body:true}
      ]
    }
  }
})
