const { default: userEvent } = require('@testing-library/user-event')
const User = require('../models/Usuarios.js')
const md5 = require('md5')
const jwt = require('jsonwebtoken');
require('dotenv').config()
class Cadastros {
    static cadastroUsuario = async (req, res) => {
        const { name, email, password, confirmpassword } = req.body
        try {
           
        const UsuarioExiste = await User.findOne({email: email})
        if (!name) {
            res.status(422).json({ error: "Nome é obrigatorio" })
        }
        if (!email) {
            res.status(422).json({ error: "email é obrigatorio" })
        }
        if (!password) {
            res.status(422).json({ error: "password é obrigatorio" })
        } 
        if (password !== confirmpassword){
            res.status(422).json({ error: "Senha é diferente da senha de confirmação" })
        }
        if(UsuarioExiste){
            res.status(422).json({ error: "Usuario já existe" })
        }
       
            const usuario = {
                name: name,
                email: email,
                password: md5(password)
            }
            await User.create(usuario)
            res.status(201).json({ message: 'pessoa inserida com sucesso' })
           
            } catch (err) {
                res.status(500).json({ error: err + " falha ao inserir" })
            }
        
    }

    static efetuarLogin = async (req, res) => {
        const {email,password} = req.body;
        
        if (!email) {
            res.status(422).json({ error: "email é obrigatorio" })
        }
        if (!password) {
            res.status(422).json({ error: "password é obrigatorio" })
        } 

        const Usuario = await User.findOne({email: email})
        if(!Usuario){
            res.status(422).json({ error: "Usuario não encontrado" })
        }
        const PasswordCheck = md5(password) == Usuario.password

        if(!PasswordCheck){
            res.status(422).json({ error: "senha invalida" })
        }

        try{
            const secret = process.env.SECRET
            const token = jwt.sign(
                {
                    id:Usuario.id,
                    name:Usuario.name
                },
                secret
            )
            res.status(200).json({msg:'autenticação realizada com sucesso',token})
        }catch(error){
            console.log(error)
            res.status(500).json({
                msg:'aconteceu um erro no servidor, tente novamente mais tarde!'
            })
        }

    }

}


module.exports = Cadastros