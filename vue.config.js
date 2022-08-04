const { defineConfig } = require('@vue/cli-service')
module.exports = defineConfig({
  transpileDependencies: true
})


// GITHUB PAGES DEPLOYMENT
module.exports = {
  publicPath: process.env.NODE_ENV === 'production'
      ? '/lottery-mito-test/'
      : '/'
}