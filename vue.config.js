module.exports = {
  chainWebpack: config => config.optimization.minimize(false),
  pluginOptions: {
    electronBuilder: {
      builderOptions: {
        asar: false
      },
      externals: ['pouchdb', 'express-pouchdb', 'express']
    }
  }
}