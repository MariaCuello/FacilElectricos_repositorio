import logo from './logo.svg';
import Producto from "./componentes/Producto/Producto";
import NavBar from "./componentes/NavBar/NavBar";
import ProductoListContainer from './componentes/ProductoListContainer/ProductoListContainer';
import {BrowserRouter, Routes, Route} from "react-router-dom";
import ProductoDetailContainer from './componentes/ProductoDetailContainer/ProductoDetailContainer';


function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <NavBar></NavBar>
        <Routes>
          <Route path="/" element={<ProductoListContainer></ProductoListContainer>}></Route>
          <Route path="/producto/:id" element={<ProductoDetailContainer></ProductoDetailContainer>}></Route>
          <Route path="/categoria/:categoriaId" element={<ProductoListContainer></ProductoListContainer>}></Route> 
        </Routes>
        
      </BrowserRouter>
    </div>
  );
}

export default App;
