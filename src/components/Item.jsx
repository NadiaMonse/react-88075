import ButtonAddToCart from "./buttonAddToCart";

import './Item.css'
import StateComponent from "./StateComponent";
import { Link } from "react-router";

export default function Item(props){

    const { id, title, img, price}= props;
    
    return(
        <div className="card">
            <br />
            <h2 className="title">{title}</h2>

            <img className="imagen"src={img}
            height={300}
            alt={title}
            />
            <h2 className="precio">precio:${price}</h2>
            <StateComponent/>
            <div style={{textAlign: "center"}}>
                <Link to={`/detalle/${id}`}>
                <button>Ir a detalle</button>
                </Link>
            
            </div>
            
            <ButtonAddToCart/>
            </div>
    )
}