import React from "react";
import './Layout.css'

const Layout = props => {
    return (
        <div className="layout lightTheme">
            {props.children}
        </div>
    )
}

export default Layout;