const {Router} = require('express')
const Cadastros = require('../controller/CadastroUsuarios.js')

const router = Router()


router
.post('/register', Cadastros.cadastroUsuario)
.post('/login', Cadastros.efetuarLogin)

module.exports = router