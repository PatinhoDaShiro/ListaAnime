import fundoimg from "../images/login.png"
import Cadastro from "../components/Cadastro.js"
import { Formulario, Titulo, Input, Botao, TextoMudarAba } from "../components/Estilos.js"
import { Link, useNavigate, useLocation } from "react-router-dom"
import { useState } from "react"
import {validarEmail, validarSenha} from '../Utils/validadores.js'
import userServices from '../services/UserServices.js'
const userService = new userServices()
const LoginPage = () => {
    const { pathname } = useLocation();
    const [form, setForm] = useState([])
    const [loading,setLoading] = useState(false)

    const handleChange = (event) =>{
        setForm({...form, [event.target.name]:event.target.value})
    }
    const navigate = useNavigate()
    const handleSubmit = async (event) =>{
        setLoading(true)
        event.preventDefault()
        const response = await userService.login(form)
        
        if(response){
        if(pathname === '/login'){
        navigate("..", { relative: "path" });
        }else{
        window.location.href = 'https://lista-anime.vercel.app'
        }
        }
        setLoading(false)

    }
    const validadorInput = () =>{
        return validarEmail(form.email) && validarSenha(form.password)
    }

    return (
        <Cadastro imagemFundo={fundoimg}>
            <Formulario >
                <Titulo>Login</Titulo>
                <Input type="email" required id="emailUsuario" name='email' placeholder="E-mail" onChange={handleChange}/>
                <Input type="password" required id="senhaUsuario" name='password' placeholder="Senha" onChange={handleChange}/>
                <Botao type="submit" disabled={loading || !validadorInput()} onClick={handleSubmit}><span>Entrar</span></Botao>
                <TextoMudarAba>Não possui conta? <Link to="/register">Cadastre-se!</Link></TextoMudarAba>
            </Formulario>
        </Cadastro>
    )
}

export default LoginPage;