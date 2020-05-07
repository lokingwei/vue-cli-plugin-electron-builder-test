import PouchDB from "pouchdb";
// import Memory from "pouchdb-adapter-memory";
import ExpressPouchDB from 'express-pouchdb'
import Express from 'express'
import { remote } from 'electron'

// PouchDB.plugin(Memory)

let dir = '.'
if(process.env.NODE_ENV === 'production') {
  dir = remote.app.getPath('userData')
}
const withdefaultPath = PouchDB.defaults({ prefix: `${dir}/temp/`, adapter: 'leveldb' })

let express = new Express()
express.get('/', function (req, res) {
  res.send('GET request to the homepage')
})
console.log(express._router.stack)
const ep = ExpressPouchDB(withdefaultPath)
express = express.use('/db', ep)
express.listen(3000)

const db = new withdefaultPath('test')
db.allDocs({
  include_docs: true
}).then(doc=> {
  console.log(doc)
})