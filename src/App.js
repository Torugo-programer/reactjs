import React from "react";
import { BrowserRouter, Route, Routes} from "react-router-dom";
import './css/global.css'
import Contato from "./pages/Contato";
import Home from "./pages/Home";

const App = () => {
  return(
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Home />} />   
        <Route path="/contato" element={<Contato />} />   
      </Routes>
    </BrowserRouter>
  )
}

export default App;
