module.exports = {
  /*
  ** Headers of the page
  */
  head: {
    title: "LensExec - Corporate Photography",
    meta: [
      { charset: "utf-8" },
      { name: "viewport", content: "width=device-width, initial-scale=1" },
      {
        hid: "LensExec - Corporate Photography",
        name: "LensExec - Corporate Photography",
        content: "LensExec - Corporate Photography"
      }
    ],
    link: [{ rel: "icon", type: "image/x-icon", href: "/favicon.ico" }]
  },
  /*
  ** Customize the progress bar color
  */
  plugins: [
    { src: "~/plugins/vuesax", ssr: true },
    { src: "~/plugins/vue-lazyload", ssr: false },
    { src: "~/plugins/global.js" }
  ],
  css: [
    "material-icons/iconfont/material-icons.css",
    "vuesax/dist/vuesax.css",
    "swiper/dist/css/swiper.css"
  ],
  /*
     ** Customize the progress bar color
     */
  loading: {
    color: "#324468"
  },
  modules: [
    "@nuxtjs/axios",
    // "@nuxtjs/auth",
    "bootstrap-vue/nuxt"
    // "@nuxtjs/markdownit"
    // ['@nuxtjs/component-cache', { maxAge: 1000 * 60 * 60 }]
  ],
  auth: {
    // Options
  },
  // markdownit: {
  //   injected: true
  // },
  build: {
    extend(config, { isDev, isClient }) {
      []
        .concat(
          ...config.module.rules
            .find(e => e.test.toString().match(/.styl/))
            .oneOf.map(e => e.use.filter(e => e.loader == "stylus-loader"))
        )
        .forEach(stylus => {
          Object.assign(stylus.options, {
            import: [
              // 'assets/config.styl'
              // '~jeet/jeet.styl',
              // '~nib/index.styl',
              // '~rupture/rupture/index.styl'
            ]
          });
        });
    }
  }
};
