export default defineNuxtConfig({
  ssr: true,

  experimental: {
    payloadExtraction: false
  },

  runtimeConfig: {
    public: {
      version: '1.0.4',
      buildDate: new Date().toISOString()
    }
  },

  app: {
    head: {
      title: "MT Trafik Demir Çelik İnş. ve İnş Malz. San. Tic. Ltd. Şti",
      link: [
        { rel: "icon", type: "image/x-icon", href: "/favicon.ico" },
        { rel: "icon", type: "image/png", href: "/logo.png" },
        { rel: "apple-touch-icon", href: "/logo.png" },
      ],
      meta: [
        { charset: "utf-8" },
        {
          name: "viewport",
          content:
            "width=device-width, initial-scale=1.0, maximum-scale=1.0, user-scalable=0",
        },
        { "http-equiv": "X-UA-Compatible", content: "IE=edge" },
        { name: 'version', content: '1.0.0' },
        { name: 'build-date', content: new Date().toISOString() }
      ],
      script: [
        { src: "/assets/js/jquery.min.js", async: true, defer: true },
        { src: "/assets/js/popper.min.js", async: true, defer: true },
        { src: "/assets/js/bootstrap.min.js", async: true, defer: true },
        { src: "/assets/js/owl.carousel.min.js", async: true, defer: true },
      ],
    }
  },

  css: [
    "/assets/css/bootstrap.min.css",
    "/assets/css/font-awesome.min.css",
    "/assets/css/flaticon.css",
    "/assets/css/animate.css",
    "/assets/css/owl.carousel.min.css",
    "/assets/css/owl.theme.css",
    "/assets/css/magnific-popup.css",
    "/assets/css/drift-basic.min.css",
    "/assets/css/woocommerce.css",
    "/assets/css/home15.css",
    "/assets/css/style.css",
    "swiper/css",
    "swiper/css/navigation",
    "swiper/css/pagination"
  ],

  generate: {
    fallback: true,
    error: "/error.vue",
  },

  nitro: {
    prerender: {
      routes: ['/']
    },

  }
});
