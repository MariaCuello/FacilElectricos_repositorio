import "./NavBar.css"
import Carrito from "../Carrito/Carrito";
import { Link } from "react-router-dom";

function NavBar (props){
    const {} = props;

    return (
        <div className="NavBar">
            <Link to="/">
                <img src="./assets/logo.png" height="180px"></img>
            </Link>
            <ul>    
            <li><Carrito></Carrito></li>
            <li><img src="./assets/usuario.png"></img></li>
            <li> <Link className="link" to="/categoria/ofertas"> Ofertas </Link></li>
            <li> <Link className="link" to="/categoria/electrodomesticos"> Electrodomesticos </Link></li>
            </ul>
        </div>                   
    );
}
export default NavBar;