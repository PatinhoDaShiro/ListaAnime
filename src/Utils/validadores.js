
const validarEmail = (email )=>{
    return email?.toString().includes('@') && email?.toString().includes('.')
}

const validarSenha = (senha) => {
    return senha?.toString().length > 6
}

const compararSenhas = (senha, confirmarsenha)=>{
    return senha === confirmarsenha
}

const validarNome = (nome) => {
    return nome?.toString().length > 3 && nome?.toString().length < 16
}


export {
    validarEmail,
    validarSenha,
    validarNome,
    compararSenhas,

}