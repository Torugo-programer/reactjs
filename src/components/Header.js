import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import '../css/Header.css'
import Home from "../pages/Home";

const Header = () => {

    const [theme, setTheme] = useState('lightTheme')
    useEffect(() => {
        const btn_theme = document.querySelector('.btn_theme')
        const layout = document.querySelector('.layout')
        
        btn_theme.addEventListener('click', () => {
            if (theme === 'lightTheme') {
                setTheme('darkTheme')
                layout.classList = 'layout darkTheme'
                document.documentElement.style.setProperty('--darkTheme', '#222')
            } else {
                setTheme('lightTheme')
                layout.classList = 'layout lightTheme'
                document.documentElement.style.setProperty('--lightTheme', '#eee')
                
            }
        })
            const logo = document.querySelector('.logo')
            logo.addEventListener('click', () => {
                if (logo === 'click'){ 
                    <Home path="/" />
                    
                } else{
                        <Home path="/" />
                }
                
            })
        })

    return(
        <header>
            <nav>
                <div className="logo">Cajuzão</div>
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


export default Header;