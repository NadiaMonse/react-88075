import ButtonAddToCart from "./buttonAddToCart";

import './Item.css'
import StateComponent from "./StateComponent";


export default function Item(props){

    const { title, img, price}= props;
    
    return(
        <div className="card">
            <br />
            <h2 className="title">{title}</h2>

            <img className="imagen"src={img}
            height={300}
            alt={title}
            />
            <h2 className="precio">{price}</h2>
            <StateComponent/>
            <ButtonAddToCart/>
        </div>
    )
}