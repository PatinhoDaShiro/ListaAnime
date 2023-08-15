import iconLogo from "../images/iconLogo.png"
import {ImagemFundo,CaixaFormulario,LogoSite,ImageLogo,TituloLogo} from "../components/Estilos.js"

const Cadastro = ({imagemFundo, children})=>{
    return(
    <ImagemFundo  style={{ backgroundImage:`url(${imagemFundo}`}}>
        <CaixaFormulario>
            <LogoSite>
            <ImageLogo src={iconLogo} alt="icon"/>
            <TituloLogo>MyAnimeList</TituloLogo>
            </LogoSite>
            {children}
        </CaixaFormulario>
    </ImagemFundo>
    )
}

export default Cadastro;