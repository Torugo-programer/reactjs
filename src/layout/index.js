import React, { useContext } from "react";
import { themeContext } from '../UserContext'
import './Layout.css'

const Layout = props => {
    const { theme } = useContext(themeContext)

    return(
        <div className={`layout ${theme}`}>
            {props.children}
        </div>
    )
}

export default Layout;