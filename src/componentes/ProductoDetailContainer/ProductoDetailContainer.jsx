import { useState, useEffect } from "react";
import { getDataProducto } from "../../servicios/asyncMock";
import { useParams } from "react-router-dom";

function ProductoDetailContainer () {
    const [producto, setProducto] = useState({});
    const { id } = useParams();

    async function requestProducto() {
        let respuesta = await getDataProducto(id);
        setProducto(respuesta);
    }

    useEffect(() =>{
        requestProducto();
    }, []);

    return (
        <div className="item">
            <img src={producto.imagen} width="100px"></img>
            <h1>{producto.nombre}</h1>
            <h3>{producto.marca}</h3>
            <h3>{producto.modelo}</h3>
            <h3>{producto.precio}</h3>
        </div>
    );


}

export default ProductoDetailContainer;