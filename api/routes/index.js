
const bodyParser = require('body-parser')
const cadastro = require('./cadastros.js')



module.exports = app =>{


  app.use(
 bodyParser.json(),
 cadastro
 )
  
}