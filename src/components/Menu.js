import {CaixaPesquisa,Avatar,Pesquisar,NavMenu,Opcoes} from './Estilos.js'
import {AiOutlineSearch} from 'react-icons/ai'
import icon from '../images/icon.jpg'
const Menu = () => {
    return(
    <NavMenu>
        <Avatar>
        <img src={icon} alt='icone'/>
        <span>{localStorage.name}</span>  
        </Avatar>  
        <Opcoes>
            <li><span>Todos</span></li>
            <li><span>Assistindo</span></li>
            <li><span>Completos</span></li>
            <li><span>Dropados</span></li>
            <li><span>Planejo Assistir</span></li>
        </Opcoes>

        <CaixaPesquisa>
        <Pesquisar type='search' placeholder='Pesquisar'/>
        <label><AiOutlineSearch/></label>
        </CaixaPesquisa>
    </NavMenu>
    )
}

export default Menu
