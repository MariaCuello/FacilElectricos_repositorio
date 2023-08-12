import "./Producto.css";
import {Link} from "react-router-dom";

function Producto (props){
    const {id, imagen, nombre, precio} = props;

    return (
        <div className="item">
            <img src={imagen} height="100px" width="120px"></img>
            <h1>{nombre}</h1>
            <h3>{precio}</h3>
            <Link to={`/producto/${id}`}>
                <button>Ver mas</button>
            </Link>
        </div>
    );
}
export default Producto;