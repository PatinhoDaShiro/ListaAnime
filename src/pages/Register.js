import fundoimg from "../images/register.png"
import Cadastro from "../components/Cadastro.js"
import {Formulario, Titulo, Input, Botao, TextoMudarAba} from "../components/Estilos.js"
import { Link, useLocation, useNavigate } from "react-router-dom"
import { useState } from "react"
import UserServices from "../services/UserServices"
import {validarEmail, validarSenha,validarNome, compararSenhas} from '../Utils/validadores.js'
const userService = new UserServices()

const Registro = () => {
    const { pathname } = useLocation();
    const navigate = useNavigate()
    const [form, setForm] = useState([])
    const [loading,setLoading] = useState(false)

    const handleChange = (event) =>{
        setForm({...form, [event.target.name]:event.target.value})
    }

    const handleSubmit = async (event) =>{
        setLoading(true)
        event.preventDefault()
        const response = await userService.register(form)
        if(response){
        if(pathname === '/register'){
            navigate("..", { relative: "path" });
        }else{
        window.location.href = 'http://localhost:3000'
        }}
        setLoading(false)

    }
    const validadorInput = () =>{
        return validarEmail(form.email) && validarSenha(form.password) && validarNome(form.name) && compararSenhas(form.password,form.confirmpassword)
    }



    return(
        <Cadastro imagemFundo={fundoimg}>
        <Formulario>
            <Titulo>Cadastre-se</Titulo>
            <Input type="text" name='name' placeholder="Nome de exibição" onChange={handleChange}/>
            <Input type="email" name='email' placeholder="E-mail" onChange={handleChange}/>
            <Input type="password" name='password' placeholder="Senha" onChange={handleChange}/>
            <Input type="password" name='confirmpassword' placeholder="Confirme sua senha" onChange={handleChange}/>
            <Botao type="submit"  disabled={loading || !validadorInput()} onClick={handleSubmit} ><span>Cadastre-se</span></Botao>
            <TextoMudarAba>Já possui conta? <Link to="/login">Faça login!</Link></TextoMudarAba>

        </Formulario>
        </Cadastro>
    )
}

export default Registro;