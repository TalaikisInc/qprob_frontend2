const categories = process.env.keyword + '/categories/'
const tags = process.env.keyword + '/tags/'
const sentiment = process.env.keyword + '/sentiment/'
const today = process.env.keyword + '/today/'
const popular = process.env.keyword + '/popular/'

module.exports = {
  head: {
    title: 'nuxt',
    meta: [
      { charset: 'utf-8' },
      { name: 'viewport', content: 'width=device-width, initial-scale=1' }
    ],
    link: [
      { rel: 'icon', type: 'image/x-icon', href: '/favicon.ico' }
    ]
  },
  css: [
    '@/assets/css/main.css',
    '@/assets/css/bootstrap.min.css',
    '@/assets/css/font-awesome.min.css'
  ],
  plugins: [
    '~plugins/filters.js',
    '~plugins/axios.js'
  ],
  modules: [
    ['@nuxtjs/component-cache', { maxAge: 1000 * 60 * 60 * 12 }],
  ],
  env: {
    baseUrl: process.env.BASE_URL || 'http://localhost:3000/',
    logoAlt: '',
    siteName: 'Trading News',
    imgBaseUrl: 'https://qprob.com/',
    apiUrl: 'https://api.qprob.com/v2.0',
    logo: 'static/images/logo/stock_market.png',
    keyword: 'quant_finance',
    twHandle: 'QProbcom',
    fbHandle: 'QProb-1328788263849733',
    disqusID: 'QProb'
  },
  router: {
    extendRoutes (routes, resolve) {
      routes.push(
        { path: '', component: resolve(__dirname, 'pages', 'Posts.vue') },
        { path: '/page/:page/', component: resolve(__dirname, 'pages', 'PostsByPage.vue') },
        { path: '/:postSlug/', component: resolve(__dirname, 'pages', 'Post.vue') },
        { path: '/tag/:tagSlug/', component: resolve(__dirname, 'pages', 'PostsByTag.vue') },
        { path: '/source/:catSlug/', component: resolve(__dirname, 'pages', 'PostsByCat.vue') },
        { path: '/tag/:tagSlug/page/:page/', component: resolve(__dirname, 'pages', 'PostsByTagPaged.vue') },
        { path: '/source/:catSlug/page/:page/', component: resolve(__dirname, 'pages', 'PostsByCatPaged.vue') },
        { path: popular, component: resolve(__dirname, 'pages', 'PopularPosts.vue') },
        { path: popular + 'page/:page/', component: resolve(__dirname, 'pages', 'PopularPostsPaged.vue') },
        { path: categories, component: resolve(__dirname, 'pages', 'Categories.vue') },
        { path: tags, component: resolve(__dirname, 'pages', 'Tags.vue') },
        { path: categories + 'page/:page/', component: resolve(__dirname, 'pages', 'CategoriesPaged.vue') },
        { path: tags + 'page/:page/', component: resolve(__dirname, 'pages', 'TagsPaged.vue') },
        { path: sentiment, component: resolve(__dirname, 'pages', 'Sentiment.vue') },
        { path: today, component: resolve(__dirname, 'pages', 'Today.vue') },
        { path: today + 'page/:page/', component: resolve(__dirname, 'pages', 'TodayPaged.vue') },
        { path: '*', component: resolve(__dirname, 'pages', 'Error404.vue') }
      )
    }
  },
  loading: '~/components/Loading.vue',
  build: {
    analyze: true,
    extractCSS: true,
    vendor: ['axios'],
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
