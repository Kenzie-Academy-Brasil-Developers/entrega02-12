import { HeaderStyled } from "./HeadetStyled"
import logo from '../../assets/logo.png'
const Header = () => {
    return(
        <HeaderStyled>
            <img src={logo} alt="Burguer Kenzie"/>
            <nav>
                <input type="text" placeholder="Digitar Pesquisa" />
                <button>Pesquisar</button>
            </nav>
        </HeaderStyled>
    )
}

export default Header