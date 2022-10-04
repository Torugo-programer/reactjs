import React, { useEffect, useState } from "react";
import '../css/Header.css'

const Header = () => {

    const [theme, setTheme] = useState('lightTheme')
    useEffect(() => {
        const btn_theme = document.querySelector('.btn_theme')
        const layout = document.querySelector('.layout')
        
        btn_theme.addEventListener('click', () => {
            if (theme === 'lightTheme') {
                setTheme('darkTheme')
                layout.classList = 'layout lightTheme'
            } else {
                setTheme('lightTheme')
                layout.classList = 'layout lightTheme'
            }
        })
    })



    // setTheme('darkTheme')
    //  theme = lightTheme
    //  ...
    //  theme = darkTheme

    // console.log(state) // output: asd

    // func() { let arr = [val, val2]; return arr }
    //
    // func()[0] = val
    // func()[1] = val2
    //
    // Destructing Array
    //
    // [] = ()
    // [ value [0], setValue [1] ] = func()

    return(
        <header>
            <nav>
                <div className="logo">Cajuzão</div>
                <ul>
                    <li>Produtos</li>
                    <li>Serviços</li>
                    <li>Contato</li>
                </ul> 
            </nav>
            <button className="btn_theme">Tema: {
                theme === 'lightTheme' ? 'darkTheme' : 'lightTheme'
                theme === 'darkTheme' ? 'lightTheme' : 'darkTheme'
            }
            </button>
        </header>
    )
}


export default Header