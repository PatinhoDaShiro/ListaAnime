// config inicial
const express = require("express")
const mongoose = require("mongoose")

const app = express()
// forma de ler JSON
app.use(
    express.urlencoded({
        extended:true
    })
)
app.use(express.json())
// entregar uma porta
mongoose.connect("mongodb+srv://root:123@usuarios.yeatmm5.mongodb.net/?retryWrites=true&w=majority")
.then(()=>{
    console.log("conectado ao mongodb")
    app.listen(5000,()=>{
        console.log('rodando na porta 5000')
    })
})
.catch((err)=>console.log(err))
// rotas

const rotaRegistro = require('./routes/registro.js')
app.use('/register', rotaRegistro)

module.exports = app
