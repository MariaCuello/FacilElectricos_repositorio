import logo from './logo.svg';
import Producto from "./componentes/Producto/Producto";
import NavBar from "./componentes/NavBar/NavBar";


function App() {
  return (
    <div className="App">
        <NavBar></NavBar>
        <div className="contenedorProductos">
        <Producto url="./assets/cocina.jpg" titulo="titulo" subtitulo="subtitulo" precio="precio"></Producto>
        <Producto url="./assets/cocina.jpg" titulo="titulo" subtitulo="subtitulo" precio="precio"></Producto>
        <Producto url="./assets/cocina.jpg" titulo="titulo" subtitulo="subtitulo" precio="precio"></Producto>
        <Producto url="./assets/cocina.jpg" titulo="titulo" subtitulo="subtitulo" precio="precio"></Producto>
        <Producto url="./assets/cocina.jpg" titulo="titulo" subtitulo="subtitulo" precio="precio"></Producto>
        <Producto url="./assets/cocina.jpg" titulo="titulo" subtitulo="subtitulo" precio="precio"></Producto>
        <Producto url="./assets/cocina.jpg" titulo="titulo" subtitulo="subtitulo" precio="precio"></Producto>
        <Producto url="./assets/cocina.jpg" titulo="titulo" subtitulo="subtitulo" precio="precio"></Producto>
        <Producto url="./assets/cocina.jpg" titulo="titulo" subtitulo="subtitulo" precio="precio"></Producto>
        <Producto url="./assets/cocina.jpg" titulo="titulo" subtitulo="subtitulo" precio="precio"></Producto>
        <Producto url="./assets/cocina.jpg" titulo="titulo" subtitulo="subtitulo" precio="precio"></Producto>
        <Producto url="./assets/cocina.jpg" titulo="titulo" subtitulo="subtitulo" precio="precio"></Producto>
        <Producto url="./assets/cocina.jpg" titulo="titulo" subtitulo="subtitulo" precio="precio"></Producto>
        <Producto url="./assets/cocina.jpg" titulo="titulo" subtitulo="subtitulo" precio="precio"></Producto>
        <Producto url="./assets/cocina.jpg" titulo="titulo" subtitulo="subtitulo" precio="precio"></Producto>
        </div>
    </div>
  );
}

export default App;
