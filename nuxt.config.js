const modules = [
  '@nuxtjs/pwa'
]

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
    ]
  },
  /*
  ** Headers
  ** Common headers are already provided by @nuxtjs/pwa preset
  */
  head: {
    title: 'Маяк Кубани онлайн кассы под ключ'
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
    name: 'Продажа онлайн касс в Краснодаре',
    description: 'У нас Вы можете купить онлайн кассу под 54ФЗ и получить полный спектр услуг: ввод в эксплуатацию, гарантийный и пост гарантийный ремонт касс',
    lang: 'ru'
  },
  /*
  ** Modules
  */
  modules,
  plugins: [
    
  ],
  env: {
  }
}
