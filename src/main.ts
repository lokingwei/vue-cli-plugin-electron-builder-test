import Vue from "vue";
import App from "./App.vue";
import PouchDB from "pouchdb";
import { app } from 'electron';
import * as ExpressPouchDB from 'express-pouchdb'
import Express from 'express'

Vue.config.productionTip = false;
new Vue({
  render: h => h(App)
}).$mount("#app");

let dbDir = './temp/'
if (process.env.PROD) {
  const userDataDirectory = app.getPath('userData')
  dbDir = `${userDataDirectory}/db`
}
const withdefaultPath = PouchDB.defaults({prefix: dbDir});
(async () => {
  const app = new Express()
  app.get('/', function (req, res) {
    res.send('GET request to the homepage')
  })
  app.use('/db', ExpressPouchDB(withdefaultPath))
  app.listen(3000)
  console.log(new withdefaultPath('./sample/'))
})()