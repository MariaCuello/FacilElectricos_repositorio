import "./Producto.css"

function Producto (props){
    const {url, titulo, subtitulo, precio} = props;

    return (
        <div className="item">
            <img src={url} width="100px"></img>
            <h1>{titulo}</h1>
            <h3>{subtitulo}</h3>
            <h3>{precio}</h3>
        </div>
    );
}
export default Producto;