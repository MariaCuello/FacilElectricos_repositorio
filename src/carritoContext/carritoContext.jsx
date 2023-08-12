import { useState } from "react"
import { createContext } from "react"

const cartContext = createContext ({carrito:[]});

function CartContextProvider (props) {
    const [carrito, setCarrito] = useState([]);
    let existe = false;

    function agregarItem (producto, cantidad) {
        const productos = [...carrito]

        productos.forEach (item => {
            if (item.id === producto.id) {
              item.cantidad = item.cantidad + cantidad;
              existe =  true; 
            }
        })
            if (existe)
                setCarrito (productos);
            else
              setCarrito ([...carrito, {...producto, cantidad}]); 
        }

        function getItem(id) {
            return carrito.find((item) => item.id === id);
          }
        
          function removerItem(id) {
            setCarrito(carrito.filter((item) => item.id !== id));
          }
        
          function limpiar() {
            setCarrito([]);
          }

          function getTotalItems() {
            return carrito.length;
          }
        
          function getTotalPrecio() {
            let total = 0;
            carrito.forEach((item) => {
              total += item.cantidad * item.precio;
            });
            return total;
          }



    return (
        <cartContext.Provider value={{carrito, agregarItem, getItem, removerItem, limpiar, getTotalItems, getTotalPrecio}}>
            {props.children}
        </cartContext.Provider>
    );
}

export { cartContext, CartContextProvider };