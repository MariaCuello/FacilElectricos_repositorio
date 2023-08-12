import { useState, useEffect } from "react";
import { getOrden } from "../../servicios/firebase";
import { useParams } from "react-router-dom";


function OrderConfirmada() {
  const [orderData, setOrderData] = useState(null);

  const { id } = useParams();

  useEffect(() => {
    getOrden(id).then((order) => {
      setOrderData(order);
    });
  }, []);

  return (
    <div>
      <h1>Muchas gracias por su compra ¡Hasta pronto! </h1>
      {orderData !== null ? (
        <div>
          <p>
            Lista de electrodomesticos:
            {orderData.items.map((item) => {
              return (
                <h3>{item.nombre} - {item.cantidad}</h3>
              );
            })}
          </p>
        </div>
      ) : (
        <p>Cargando</p>
      )}
    </div>
  );
}

export default OrderConfirmada;