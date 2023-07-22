import { useState, useEffect } from "react";
import getData, { getDataOferta } from "../../servicios/asyncMock";
import Producto from "../Producto/Producto";
import { useParams } from "react-router-dom";

function ProductoListContainer () {
    const [productos, setProductos] = useState([]);
    const {categoriaId} = useParams();

    async function requestProductos() {
        let oferta = false;
        if (categoriaId === "ofertas")
            oferta = true;
        console.log(oferta);
        let respuesta = categoriaId ? await getDataOferta(oferta) : await getData();
        setProductos(respuesta);
    }

    useEffect(() =>{
        requestProductos();
    }, []);

    return (
        <div className="contenedorProductos">
            {productos.map((producto) => (
                <Producto key={producto.id} {...producto}></Producto>
        ))}
        </div>
    )


}

export default ProductoListContainer;