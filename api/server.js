// config inicial
const express = require("express")
const mongoose = require("mongoose")
const cors = require("cors")

require('dotenv').config()
const routes = require("./routes/index.js")
const app = express()
const dbUser = process.env.DB_USER
const dbPassword = process.env.DB_PASS

// forma de ler JSON

app.use(cors())



// entregar uma porta

mongoose.connect(`mongodb+srv://${dbUser}:${dbPassword}@usuarios.yeatmm5.mongodb.net/?retryWrites=true&w=majority`)
.then(()=>{
    console.log("conectado ao mongodb")
    app.listen(5000,()=>{
        console.log('rodando na porta 5000')
    })
})
.catch((err)=>console.log(err))
// rotas

  
routes(app);
module.exports = app
