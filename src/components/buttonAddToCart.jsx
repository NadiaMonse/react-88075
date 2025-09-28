 
import { useState } from "react";
 
 export default function ButtonAddToCart (){
    
    const [statusInCart, setStatusInCart]=useState("no agregar al carrito")
    
    function handleClick(){
        alert("gracias por agregarme al carrito")
        setStatusInCart("producto agregado al carrito!")
    }
    return(
        <div>
            <button onClick={handleClick}>agregar al carrito</button>
            <br />
            <small>{statusInCart}</small>
            
        </div>
    )
}