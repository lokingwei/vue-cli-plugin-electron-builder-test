module.exports = {
  chainWebpack: config => config.optimization.minimize(false),
  pluginOptions: {
    electronBuilder: {
      builderOptions: {
        asar: false
      },
      chainWebpackRendererProcess: config => {
        // Chain webpack config for electron renderer process only
        // The following example will set IS_ELECTRON to true in your app
        config.target('electron-renderer')
      },
      externals: ['pouchdb', 'express-pouchdb', 'express']
    }
  }
}