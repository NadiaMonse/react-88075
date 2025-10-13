import StateComponent from "../StateComponent"
import { useParams } from "react-router"
import{ getProductById} from "../../data/mockAPI";
import { useEffect, useState, useContext } from "react";
import cartContext from "../../contex/cartContext";


function ItemDetailContainer() {
    const {idParam} = useParams()
    const [product, setProduct] = useState({loading: true})
    const context = useContext(cartContext);

    useEffect( ()=>{
        getProductById(idParam).then( response=> setProduct(response))
    }
    ,[])
    if (product.loading)
        return <p>cargando...</p>
    return (
        <div className="card">
            
            <h2 className="title">{product.title}</h2>

            <img className="imagen"src={ product.img}
            height="300"
            />
            <h2 className="precio">{product.price}</h2>
            <StateComponent/>
            <div style={{textAlign: "center"}}>
                <p>{product.description}</p>
                </div>
                <button onClick={()=>context.addToCart(product)}>agregar al carrito</button>
            </div>)
}
export default ItemDetailContainer