const mongoose = require('mongoose')

// criar tabela
const User = mongoose.model('User',{
    name:String,
    password:String,
    email:String,
})

module.exports = User