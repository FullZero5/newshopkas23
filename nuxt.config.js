const {
  NODE_ENV,
  FB_DATABASE_URL,
  FB_PROJECT_ID,
  FB_API_KEY,
  FB_AUTH_DOMAIN,
  FB_STORAGE_BUCKET,
  FB_MESSAGE_SENDER_ID,
  GA_ID
} = process.env

module.exports = {
  /*
  ** Build configuration
  */
  build: {
    postcss: [// will fix bulma warning about column
      require('postcss-cssnext')({
        features: {
          customProperties: false
        }
      })
    ],
    vendor: [
      'firebase/app',
      'firebase/database'
    ]
  },
  /*
  ** Headers
  ** Common headers are already provided by @nuxtjs/pwa preset
  */
  head: {
    title: 'Онлайн кассы под ключ, установка, гарантийный  и послегарантийный ремонт кассовых аппаратов'
  },
  /*
  ** Customize the progress-bar color
  */
  loading: { color: '#f4a00d' },
  /*
  ** Customize app manifest
  */
  manifest: {
    theme_color: '#f4a00d',
    name: 'Продажа онлайн касс',
    description: 'У нас Вы можете купить онлайн кассу под 54ФЗ и получить полный спектр услуг: ввод в эксплуатацию, гарантийный и пост гарантийный ремонт касс',
    lang: 'ru'
  },
  /*
  ** Modules
  */
  modules: [
    '@nuxtjs/pwa',
    '@nuxtjs/dotenv'
  ],
  plugins: [
    '~plugins/firebase',
    { src: '~plugins/lazysizes', ssr: false },
    { src: '~plugins/localStorage.js', ssr: false }
  ],
  env: {
    FB_DATABASE_URL,
    FB_PROJECT_ID,
    FB_API_KEY,
    FB_AUTH_DOMAIN,
    FB_STORAGE_BUCKET,
    FB_MESSAGE_SENDER_ID
  }
}