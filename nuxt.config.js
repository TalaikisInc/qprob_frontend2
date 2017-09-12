require('dotenv').config()

const tags = '/' + process.env.KEYWORD + '/tags/'
const sentiment = '/' + process.env.KEYWORD + '/sentiment/'
const popular = '/' + process.env.KEYWORD + '/popular/'

module.exports = {
  head: {
    title: 'QProb',
    manifest: {
      name: process.env.SITE_NAME,
      short_name: 'QProb',
      lang: 'en'
    },
    meta: [
      { charset: 'utf-8' },
      { name: 'viewport', content: 'width=device-width, initial-scale=1' }
    ],
    script: [
      { src: 'https://pagead2.googlesyndication.com/pagead/js/adsbygoogle.js' },
      { src: '/js/jquery.min.js' },
      { src: '/js/bootstrap.min.js' },
      { src: '/js/vue-social-sharing.min.js' }
    ],
    link: [
      { rel: 'icon', type: 'image/x-icon', href: '/favicon.ico' },
      { rel: 'stylesheet', href: 'https://fonts.googleapis.com/css?family=Space+Mono' },
      { rel: 'stylesheet', href: 'https://maxcdn.bootstrapcdn.com/font-awesome/4.7.0/css/font-awesome.min.css' }
    ]
  },
  css: [
    '@/static/css/main.css',
    '@/static/css/bootstrap.min.css'
  ],
  plugins: [
    '~plugins/filters.js',
    '~plugins/axios.js'
  ],
  env: {
    API_URL: process.env.API_URL,
    BASE_URL: process.env.BASE_URL,
    IMG_URL: process.env.IMG_URL,
    SITE_NAME: process.env.SITE_NAME,
    ADSENSE_AD_CLIENT: process.env.ADSENSE_AD_CLIENT,
    ADSENSE_AD_SLOT: process.env.ADSENSE_AD_SLOT,
    DISQUS: process.env.DISQUS,
    TWITTER_HANDLE: process.env.TWITTER_HANDLE,
    FACEBOOK_HANDLE: process.env.FACEBOOK_HANDLE
  },
  modules: [
    ['@nuxtjs/component-cache', { maxAge: 1000 * 60 * 60 * 24 }],
    ['@nuxtjs/google-analytics', { ua: process.env.GOOGLE_ANALYTICS }],
    ['@nuxtjs/google-tag-manager', { id: process.env.GTM }],
    '@nuxtjs/icon',
    '@nuxtjs/meta',
    '@nuxtjs/workbox',
    '@nuxtjs/manifest'
  ],
  router: {
    extendRoutes (routes, resolve) {
      routes.push(
        { path: '', component: resolve(__dirname, 'pages', 'Posts.vue') },
        { path: '/page/:page/', component: resolve(__dirname, 'pages', 'Posts.vue') },
        { path: '/:postSlug/', component: resolve(__dirname, 'pages', 'Post.vue') },
        { path: '/tag/:tagSlug/', component: resolve(__dirname, 'pages', 'PostsByTag.vue') },
        { path: '/source/:catSlug/', component: resolve(__dirname, 'pages', 'PostsByCat.vue') },
        { path: '/tag/:tagSlug/page/:page/', component: resolve(__dirname, 'pages', 'PostsByTag.vue') },
        { path: '/source/:catSlug/page/:page/', component: resolve(__dirname, 'pages', 'PostsByCat.vue') },
        { path: popular, component: resolve(__dirname, 'pages', 'PopularPosts.vue') },
        { path: popular + 'page/:page/', component: resolve(__dirname, 'pages', 'PopularPosts.vue') },
        { path: tags, component: resolve(__dirname, 'pages', 'Tags.vue') },
        { path: tags + 'page/:page/', component: resolve(__dirname, 'pages', 'Tags.vue') },
        { path: sentiment, component: resolve(__dirname, 'pages', 'Sentiment.vue') },
        { path: '/today/', component: resolve(__dirname, 'pages', 'Today.vue') },
        { path: '/today/page/:page/', component: resolve(__dirname, 'pages', 'Today.vue') },
        { path: '*', component: resolve(__dirname, 'pages', 'Error404.vue') }
      )
    }
  },
  loading: '~/components/Loading.vue',
  build: {
    analyze: false,
    extractCSS: true,
    vendor: ['axios', 'moment'],
    extend (config, ctx) {
      if (ctx.dev && ctx.isClient) {
        config.module.rules.push({
          enforce: 'pre',
          test: /\.(js|vue)$/,
          loader: 'eslint-loader',
          exclude: /(node_modules)/
        })
      }
    }
  }
}
