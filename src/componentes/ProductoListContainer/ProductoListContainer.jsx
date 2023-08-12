import { useState, useEffect } from "react";
import Producto from "../Producto/Producto";
import { useParams } from "react-router-dom";
import { getData, getCategoriaData, exportarElectrodomesticosBatch } from "../../servicios/firebase";
import { Audio } from 'react-loader-spinner';

function ProductoListContainer () {
    const [productos, setProductos] = useState([]);
    const [cargando, setCargando] = useState(true);
    const {categoriaId} = useParams();

    async function requestProductos() {
        setCargando(true);
        let oferta = false;
        if (categoriaId === "ofertas")
            oferta = true;
        let respuesta = categoriaId ? await getCategoriaData(oferta) : await getData();
        setProductos(respuesta);
        setCargando(false);
    }

    useEffect(() =>{
        requestProductos();
    }, [categoriaId]);

    return (
    <div className="contenedorProductos">
    {productos.map((producto) => (
        <Producto key={producto.id} {...producto}></Producto>
    ))}
    </div>
    );
}

export default ProductoListContainer;