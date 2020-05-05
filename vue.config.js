module.exports = {
  chainWebpack: config => config.optimization.minimize(false),
  pluginOptions: {
    electronBuilder: {
      externals: ['pouchdb', 'express-pouchdb', 'express']
    }
  }
}