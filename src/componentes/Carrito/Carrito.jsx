import "./Carrito.css"
import { useContext } from "react";
import { cartContext } from "../../carritoContext/carritoContext";

function Carrito (props){
    const {} = props;

    const context = useContext(cartContext);
    let totalProductos = 0;

    context.carrito.forEach (item => {
        totalProductos += item.cantidad;
    });

    return (
        <div className="Carrito">
           <img src="/assets/carrito-de-compras.png"></img>
           <h5>{totalProductos}</h5>
        </div>                   
    );
}
export default Carrito;