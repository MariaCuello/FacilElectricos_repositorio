import React from "react";
import { useContext } from "react";
import { cartContext } from "../../carritoContext/carritoContext";
import { Link, useNavigate } from "react-router-dom";

function CarritoContainer () {
  const { carrito, removerItem, getTotalPrecio, getTotalItems } = useContext(cartContext);

  return (
    <div>
      <h1>Carrito</h1>
      { getTotalItems() > 0 ?
      <div>
        {carrito.map((item) => (
            <div key={item}>
            {console.log(item.id)}
            <h3>{item.nombre}</h3>
            <p>Precio: {item.precio} €</p>
            <p>Unidades: {item.cantidad}</p>
            <p>Total producto: {item.cantidad * item.precio}</p>
            <button onClick={() => removerItem(item.id)}>Eliminiar producto</button>
            </div>
        ))}
        <br />
        <div>Total = {getTotalPrecio()}</div>
        <br />
        <Link className="link" to="/generar-orden"><button>Continuar compra</button></Link>
      </div>
      :
      <h3>No hay productos en la cesta</h3>
    }
      
    </div>
  );
}

export default CarritoContainer;