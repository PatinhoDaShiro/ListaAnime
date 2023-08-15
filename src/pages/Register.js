import fundoimg from "../images/register.png"
import Cadastro from "../components/Cadastro.js"
import {Formulario, Titulo, Input, Botao, TextoMudarAba} from "../components/Estilos.js"
import { Link } from "react-router-dom"
const Registro = () => {
    return(
        <Cadastro imagemFundo={fundoimg}>
        <Formulario>
            <Titulo>Cadastre-se</Titulo>
            <Input type="text" placeholder="Nome de exibição"/>
            <Input type="email" placeholder="E-mail"/>
            <Input type="password" placeholder="Senha"/>
            <Input type="password" placeholder="Confirme sua senha"/>
            <Botao type="submit"><span>Cadastre-se</span></Botao>
            <TextoMudarAba>Já possui conta? <Link to="/login">Faça login!</Link></TextoMudarAba>

        </Formulario>
        </Cadastro>
    )
}

export default Registro;