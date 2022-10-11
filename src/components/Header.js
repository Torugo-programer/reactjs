import React, { useEffect } from "react";
import { Link } from "react-router-dom";
import { useContext } from "react";
import{ themeContext } from '../UserContext'
import '../css/Header.css'

const Header = () => {    
   const {theme, setTheme} = useContext(themeContext)

    useEffect(() => {
        const btn_theme = document.querySelector('.btn_theme')
        
        btn_theme.addEventListener('click', () => {

            if (theme === 'lightTheme') {
                setTheme('darkTheme')
            } else {
                setTheme('lightTheme')
            }
        })
            
    })

    return(
        <header>
            <nav>
                <Link to= "/"><div className="logo">Cajuzão</div></Link>
                <ul>
                    <Link to={'/produtos'}> <li>Produtos</li></Link>
                    <Link to={'/servicos'}> <li>Serviços</li></Link>
                    <Link to={'/contato'}> <li>Contato</li></Link>
                </ul> 
            </nav>
            <button className="btn_theme">{
                theme === 'lightTheme' ? 'Tema Claro' : 'Tema Escuro' 
            }
            </button>
        </header>
    )
}

//arrumar o tema claro e escuro, para que na hora de trocar a tela, continue no tema que estava (escuro).


export default Header;