import { useNavigate } from "react-router-dom";
import { cartContext } from "../../carritoContext/carritoContext";
import { crearOrden } from "../../servicios/firebase";
import { useContext, useState } from "react";

function GenerarOrden() {
  const [buyer, setBuyer] = useState({
    firstname: "",
    lastname: "",
    address: "",
  });

  const navigate = useNavigate();
  const { carrito, getTotalPrecio, limpiar } = useContext(cartContext);

  async function handleCheckout(evt) {
    evt.preventDefault();
    const orderData = {
      items: carrito,
      buyer: buyer,
      date: new Date(),
      total: getTotalPrecio(),
    };

    try {
      const idOrder = await crearOrden(orderData);
      limpiar();
      navigate(`/orden-confirmada/${idOrder}`);
    } catch (error) {
      alert(`No se pudo realizar la compra ${error.message}`);
    }
  }

  function onInputChange(evt) {
    const value = evt.target.value;
    const field = evt.target.name;
    const newState = { ...buyer };
    newState[field] = value;
    setBuyer(newState);
  }

  function resetForm(e) {
    e.preventDefault();
    setBuyer({
      firstname: "",
      lastname: "",
      address: "",
    });
  }

  return (
    <form>
      <h2>Completar campos</h2>

      <div style={{ display: "flex", marginBottom: 10 }}>
        <label htmlFor="lastname" style={{ width: "200px", marginRight: 10 }}>
          Nombre
        </label>
        <input
          value={buyer.firstname}
          name="firstname"
          type="text"
          onChange={onInputChange}
        />
      </div>

      <div style={{ display: "flex", marginBottom: 10 }}>
        <label htmlFor="lastname" style={{ width: "100px", marginRight: 10 }}>
          Apellido
        </label>
        <input
          value={buyer.lastname}
          name="lastname"
          type="text"
          onChange={onInputChange}
        />
      </div>

      <div style={{ display: "flex", marginBottom: 10 }}>
        <label style={{ width: "100px", marginRight: 10 }}>Direccion</label>
        <input
          value={buyer.address}
          name="address"
          type="text"
          onChange={onInputChange}
        />
      </div>

      <button
        disabled={
          !(buyer.firstname !== "" && buyer.lastname !== "" && buyer.address !== "")
        }
        onClick={handleCheckout}
      >
        Finalizar Compra
      </button>
      <button onClick={resetForm}>Cancelar</button>
    </form>
  );
}

export default GenerarOrden;