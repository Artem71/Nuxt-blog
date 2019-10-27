
module.exports = {
  mode: 'universal',

  head: {
    title: process.env.npm_package_name || '',
    meta: [
      { charset: 'utf-8' },
      { name: 'viewport', content: 'width=device-width, initial-scale=1' },
      { hid: 'description', name: 'description', content: process.env.npm_package_description || '' }
    ],
    link: [
      { rel: 'icon', type: 'image/x-icon', href: '/favicon.ico' }
    ]
  },

  loading: { color: '#409eff' },

  css: [
    'element-ui/lib/theme-chalk/index.css',
    '@/theme/'
  ],

  plugins: [
    '@/plugins/globals',
    '@/plugins/axios'
  ],

  buildModules: [
  ],

  modules: [
    '@nuxtjs/axios'
  ],

  axios: {},

  env: {
    appName: 'SSR Blog'
  },

  build: {
    transpile: [/^element-ui/],

    extend (config, ctx) {
    }
  }
}
