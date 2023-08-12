import { useState } from "react"
import "./ItemCount.css"

function ItemCount (props) {
    const [count, setCount] = useState (1);

    function masCount() {
        setCount(count+1);
    }
    
    function menosCount() {
        if (count >1)
           setCount(count-1);
    }

    return(
    <div className="contenedorContador">
        <img src="/assets/eliminar.png" onClick={menosCount}></img>
        <h3>{count}</h3>
        <img src="/assets/mas.png" onClick={masCount}></img>
        <button onClick={() => {props.onClick(count)}}>Añadir al carrito</button>
    </div>
    )
}

export default ItemCount;