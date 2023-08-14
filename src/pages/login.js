import styled from "styled-components"
import iconLogo from "../images/iconLogo.png"
import fundoimg from "../images/login.png"

const ImagemFundo = styled.section`
height: 100vh;
background-size:cover;
background-image:url(${fundoimg});
display: flex;
justify-content: center;
align-items: center;
background-position: center;
background-repeat:no-repeat;
`
const CaixaFormulario = styled.div`
display:flex;
flex-direction: column;
align-items: center;
justify-content: space-between;
padding: 2rem;
height: 50%;
border-radius: 5%;
backdrop-filter: blur(2px);
box-shadow: -5px -5px 10px rgba(0, 0, 0, 0.2),5px 5px 10px rgba(0, 0, 0, 0.2);
font-family: 'Play', sans-serif;
`
const LogoSite = styled.div`
    display: flex;
    align-items: end;
    justify-content: space-around;
    border-bottom: 1px solid black;
    margin-bottom: 3rem;
`
const ImageLogo = styled.img`
width:72px;

`
const TituloLogo = styled.h1`
font-size: 32px;
color:black ;
margin-bottom: 2px;
font-weight: bold;
margin-left:1rem;
`
const Titulo = styled.h1`
font-size: 32px;
color:black ;
font-weight: bold;
`
const Input = styled.input`
width: 25vw;
min-width: 100%;
padding: 0.5rem;
border-radius: 10px;
border: 1px black solid;
box-shadow: 0 0 0 0;
outline: 0;
font-size: 16px;
font-family: 'Play', sans-serif;
font-weight: 600;

`
const Formulario = styled.form`
display: flex;
flex-direction: column;
gap: 1.5rem;
justify-content: center;
align-items: center;
flex-grow: 1;
min-width: 100%;
`

const Botao = styled.button`

background: rgba(18,165,220,0.5);
border: 2px solid #12a5dc;
border-radius: 5px;
transition: 1s;
padding: 0.5rem 1rem ;
cursor: pointer;
position: relative;
a{
    text-decoration: none;
    color: black;
    font-size: 24px;
    font-family: 'Play', sans-serif;
    font-weight: 600;
}
a::after{
    width: 80%;
    height: 2px;
    transition: opacity 300ms, transform 300ms;
    transform: scale(0);
    transform-origin: center;
    content: " ";
    
    background: black;
    position: absolute;
    bottom: 15%;
    left: 10%;
}
&:hover a::after{
    transform: scale(1);
}
&:hover{
    background:#12a5dc ;
}

`

const LoginPage = () =>{
return(
    <ImagemFundo>
    <CaixaFormulario>
        <LogoSite>
        <ImageLogo src={iconLogo} alt="icon"/>
        <TituloLogo>MyAnimeList</TituloLogo>
        </LogoSite>
        <Formulario>
        <Titulo>Login</Titulo>
        <Input type="email" placeholder="E-mail"/>
        <Input type="password" placeholder="Senha"/>
        <Botao type="submit"><a href="/">Entrar</a></Botao>
        </Formulario>
    </CaixaFormulario>
    </ImagemFundo>
)
}

export default LoginPage;