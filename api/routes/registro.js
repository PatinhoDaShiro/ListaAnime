const User = require('../models/Usuarios.js')
const router = require("express").Router()
const md5 = require('md5')

router.post('/', async (req,res)=>{
    //req.body
    const {name,email,password}= req.body
    if(!name){
        res.status(422).json({error:"Nome é obrigatorio"})
    }
    else if(!email){
        res.status(422).json({error:"email é obrigatorio"})
    }
    else if(!password){
        res.status(422).json({error:"password é obrigatorio"})
    }else{
        const usuario = {
            name:name,
            email:email,
            password:md5(password)
        }
        try{
            await User.create(usuario)
            res.status(201).json({message:'pessoa inserida com sucesso'})
        }catch(err){
            res.status(500).json({error:err+" falha ao inserir"})
        }
    }

})

module.exports = router