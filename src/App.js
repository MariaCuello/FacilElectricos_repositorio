import logo from './logo.svg';
import NavBar from "./componentes/NavBar/NavBar";
import ProductoListContainer from './componentes/ProductoListContainer/ProductoListContainer';
import {BrowserRouter, Routes, Route} from "react-router-dom";
import ProductoDetailContainer from './componentes/ProductoDetailContainer/ProductoDetailContainer';
import { CartContextProvider, cartContext } from './carritoContext/carritoContext';
import CarritoContainer from './componentes/CarritoContainer/CarritoContainer';
import OrderConfirmada from './componentes/OrdenConfirmada/OrdenConfirmada';
import GenerarOrden from './componentes/GenerarOrden/GenerarOrden';


function App() {
  return (
    <div className="App">
      <CartContextProvider>
      <BrowserRouter>
        <NavBar></NavBar>
        <Routes>
          <Route path="/" element={<ProductoListContainer></ProductoListContainer>}></Route>
          <Route path="/producto/:id" element={<ProductoDetailContainer></ProductoDetailContainer>}></Route>
          <Route path="/categoria/:categoriaId" element={<ProductoListContainer></ProductoListContainer>}></Route> 
          <Route path="/carrito" element={<CarritoContainer></CarritoContainer>}></Route>
          <Route path="/orden-confirmada/:id" element={<OrderConfirmada></OrderConfirmada>}></Route>
          <Route path="/generar-orden" element={<GenerarOrden></GenerarOrden>}></Route>
        </Routes>
        </BrowserRouter>
      </CartContextProvider>
    </div>
  );
}

export default App;
