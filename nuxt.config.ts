// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  modules: ['@pinia/nuxt', '@formkit/nuxt', '@pinia-plugin-persistedstate/nuxt'],

  formkit: {
    // Experimental support for auto loading (see note):
    autoImport: true
  },
  
  devtools: { enabled: true },

  app: {
    head: {
      link: [
        {rel: 'stylesheet', href: 'https://cdnjs.cloudflare.com/ajax/libs/font-awesome/6.5.1/css/all.min.css'},
        {rel: 'stylesheet', href: 'https://cdn.jsdelivr.net/npm/bootstrap@5.3.3/dist/css/bootstrap.min.css'},
        {rel: 'stylesheet', href: '/css/animate.css'},
        {rel: 'stylesheet', href: '/css/bootstrap.css'},
        {rel: 'stylesheet', href: '/css/flex-slider.min.css'},
        {rel: 'stylesheet', href: '/css/font-awesome.css'},
        {rel: 'stylesheet', href: '/css/jquery-ui.css'},
        {rel: 'stylesheet', href: '/css/magnific-popup.css'},
        {rel: 'stylesheet', href: '/css/magnific-popup.min.css'},
        {rel: 'stylesheet', href: '/css/nice-select.css'},
        {rel: 'stylesheet', href: '/css/niceselect.css'},
        {rel: 'stylesheet', href: '/css/owl-carousel.css'},
        {rel: 'stylesheet', href: '/css/reset.css'},
        {rel: 'stylesheet', href: '/css/responsive.css'},
        {rel: 'stylesheet', href: '/css/slicknav.min.css'},
        {rel: 'stylesheet', href: '/css/themify-icons.css'},
        {rel: 'stylesheet', href: '/css/style.css'},
        {rel: 'stylesheet', href: '/css/myStyle.css'},
        {rel: 'stylesheet', href: '/css/dashboard.css'},
      ],

      script: [
        {src: "https://cdn.jsdelivr.net/npm/@popperjs/core@2.11.8/dist/umd/popper.min.js", body:true},
        {src: "https://cdn.jsdelivr.net/npm/bootstrap@5.3.3/dist/js/bootstrap.min.js", body:true},
        {src: "/js/dashboard.js", body:true},
      ]
    }
  }
})
