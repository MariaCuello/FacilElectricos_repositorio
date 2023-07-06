import "./NavBar.css"
import Carrito from "../Carrito/Carrito";

function NavBar (props){
    const {} = props;

    return (
        <div className="NavBar">
            <img src="./assets/logo.png" height="180px"></img>

            <ul>
            <li><Carrito></Carrito></li>
            <li><img src="./assets/usuario.png"></img></li>
            </ul>
        </div>                   
        

    );
}
export default NavBar;