import styled from "styled-components"
//registro / login
const Formulario = styled.form`
display: flex;
flex-direction: column;
gap: 1.5rem;
justify-content: center;
align-items: center;
flex-grow: 1;
min-width: 100%;
@media screen and (max-height: 599px) {
    gap: 1.2rem;
}
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
const Botao = styled.button`

background: rgba(18,165,220,0.5);
border: 2px solid #12a5dc;
border-radius: 5px;
transition: 1s;
padding: 0.5rem 1rem ;
cursor: pointer;
position: relative;
span{
   
    color: black;
    font-size: 24px;
    font-family: 'Play', sans-serif;
    font-weight: 600;
}
span::after{
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
&:hover span::after{
    transform: scale(1);
}
&:hover{
    background:#12a5dc ;
}
&:disabled{
    opacity: 0.7;
    border: black 2px solid;
}
`
const ImagemFundo = styled.section`
height: 100vh;
background-size:cover;
display: flex;
justify-content: center;
align-items: center;
background-position: center;
background-repeat:no-repeat;
@media screen and (max-height: 539px) {
   height: fit-content;
}
`
const CaixaFormulario = styled.div`
display:flex;
flex-direction: column;
align-items: center;
justify-content: space-between;
padding: 2rem;
min-height: fit-content;
border-radius: 5%;
backdrop-filter: blur(2px);
box-shadow: -5px -5px 10px rgba(0, 0, 0, 0.2),5px 5px 10px rgba(0, 0, 0, 0.2);
font-family: 'Play', sans-serif;
background: rgba(255,255,255,0.3);

@media screen and (max-width: 1000px) {
    width: 70%;
}
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
@media screen and (max-width: 300px) {
    width: 44px;
}
`
const TituloLogo = styled.h1`
font-size: 32px;
color:black ;
margin-bottom: 2px;
font-weight: bold;
margin-left:1rem;
@media screen and (max-width: 300px) {
    font-size: 24px;
}
`
const TextoMudarAba = styled.span`
font-size: 18px;
font-weight: 500;
a{
    color: #0000ff;
    font-weight: 700;
    text-decoration: none;
}
@media screen and (max-width: 300px) {
    font-size: 14px;
}
`

//menu
const NavMenu = styled.nav`
    display: flex;
    justify-content: space-around;
    width: 100%;
    height: 4rem;
    align-items: center;
    margin-top: 5rem;
    background: white;
`
const Opcoes = styled.ul`
    font-size: 18px;
    display:flex;
    justify-content: space-between;
    width: 40%;
    padding: 2rem;
    font-family: 'Lucida Sans', 'Lucida Sans Regular', 'Lucida Grande', 'Lucida Sans Unicode', Geneva, Verdana, sans-serif;
    font-weight: 400;
    color: gray;
    li{
        position: relative;
        cursor: pointer;
    }
    
    li span::after{
        
        width: 100%;
        height: 5px;
        transition: opacity 300ms, transform 100ms;
        transform: scale(0);
        transform-origin: center;
        content: " ";
        position: absolute;
        bottom: -1rem;
        left: 0%;
    }
    li:nth-child(1) span::after {
        background: #0080c0;
    }
    li:nth-child(2) span::after {
        background: green;
    }
    li:nth-child(3) span::after {
        background: blue;
    }
    li:nth-child(4) span::after {
        background: red;
    }
    li:nth-child(5) span::after {
        background: gray;
    }

    li:hover span::after{
    transform: scale(1);
}`
const CaixaPesquisa = styled.div`
position: relative;
label{
    position:absolute;
    right: 5%;
    top: 26%;
}
`
const Pesquisar = styled.input`
height: 2rem;
outline: none;
border: 1px solid gray;
border-radius: 5px;
padding: 1rem;
&::placeholder{
    font-size: 16px;
}
`
const Avatar = styled.div`
display: flex;
align-items: center;
gap: 1rem;
font-size: 24px;
color: #6e6e6e;
img{
    border-radius: 50%;
    width: 8rem;
    border: 5px solid white;
    cursor: pointer;
}
span{
    cursor: pointer;
}


`

// Lista

const Container = styled.section`
display: flex;
flex-direction: column;
width: 80%;
margin: auto;
`
const Anime = styled.div`
width: 100%;
background-color: white;
text-align: center;
display: flex;
align-items: center;
padding: 1rem;
margin: 0.5rem;
position: relative;
&:nth-child(1){
    margin-top: 2.3rem;
}
&::after{
    position: absolute;
    height: 100%;
    width: 3px;
    background: green;
    content: '';
    left: 0%;
}
img{
    border-radius: 50%;
    width: 5rem;
    height: 5rem;
}
h1{
    font-weight: 500;
    font-family: 'Lucida Sans', 'Lucida Sans Regular', 'Lucida Grande', 'Lucida Sans Unicode', Geneva, Verdana, sans-serif;
    
}
gap: 1rem;
`
export {
    Anime,
    Container,
    CaixaPesquisa,
    Avatar,
    Pesquisar,
    Opcoes,
    Formulario, 
    Titulo, 
    Input, 
    Botao, 
    ImagemFundo, 
    CaixaFormulario, 
    LogoSite, 
    ImageLogo, 
    TituloLogo, 
    TextoMudarAba, 
    NavMenu
}