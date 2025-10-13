 
import { useState } from "react";
 
 export default function ButtonAddToCart (){
    
    const [statusInCart, setStatusInCart]=useState("no agregar al carrito")
    
    function handleClick(){
        alert("Gracias por agregarme !")
        setStatusInCart("producto agregado al carrito!")
    }
    return(
        <div>
            <button onClick={handleClick}>Agregar al carrito</button>
            <br /><button onClick={handleClick}>agregar al carrito</button>
            <small>{statusInCart}</small>
            
        </div>
    )
}