import { useState, useEffect, useContext } from "react";
import { useParams } from "react-router-dom";
import ItemCount from "../ItemCount/ItemCount";
import { cartContext } from "../../carritoContext/carritoContext";
import { getProductoData } from "../../servicios/firebase";

function ProductoDetailContainer () {
    const [producto, setProducto] = useState({});
    const { id } = useParams();
    const { agregarItem } = useContext (cartContext);

    async function requestProducto() {
        let respuesta = await getProductoData(id);
        setProducto(respuesta);
    }

    useEffect(() =>{
        requestProducto();
    }, [id]);

    function handleAgregarItem (count) {
        agregarItem (producto, count);
    }

    return (
        <div className="item">
            <img src={producto.imagen} width="100px"></img>
            <h1>{producto.nombre}</h1>
            <h3>{producto.marca}</h3>
            <h3>{producto.modelo}</h3>
            <h3>{producto.precio}</h3>
            <ItemCount onClick={handleAgregarItem}></ItemCount>
        </div>
    );
}

export default ProductoDetailContainer;