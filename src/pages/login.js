import fundoimg from "../images/login.png"
import Cadastro from "../components/Cadastro.js"
import { Formulario, Titulo, Input, Botao, TextoMudarAba } from "../components/Estilos.js"
import { Link } from "react-router-dom"

const LoginPage = () => {
    return (
        <Cadastro imagemFundo={fundoimg}>
            <Formulario>
                <Titulo>Login</Titulo>
                <Input type="email" placeholder="E-mail" />
                <Input type="password" placeholder="Senha" />
                <Botao type="submit"><span>Entrar</span></Botao>
                <TextoMudarAba>Não possui conta? <Link to="/register">Cadastre-se!</Link></TextoMudarAba>
            </Formulario>
        </Cadastro>
    )
}

export default LoginPage;