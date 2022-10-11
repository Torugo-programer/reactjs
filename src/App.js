import React, { useState } from "react";
import { BrowserRouter, Route, Routes} from "react-router-dom";
import './css/global.css'
import Contato from "./pages/Contato";
import Home from "./pages/Home";
import Produtos from "./pages/Produtos";
import Servicos from "./pages/Servicos";
import { themeContext, tema } from './UserContext'

const App = () => {
  const [theme, setTheme] = useState(tema)

  return(
    <themeContext.Provider value={ {theme, setTheme} }>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Home />} />   
          <Route path="/produtos" element={<Produtos />} />   
          <Route path="/servicos" element={<Servicos />} />   
          <Route path="/contato" element={<Contato />} />
        </Routes>
      </BrowserRouter>
    </themeContext.Provider>
  )
}

export default App;
