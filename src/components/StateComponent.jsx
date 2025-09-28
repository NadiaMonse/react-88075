import { useState } from "react"

export default function StateComponent(){
    
    const [ color, setColor] = useState("#03010aff")

    return(
        <div>
            <p>selecciona tu color - color activo:
            <span style={{ display:"inline-block", width:"20px", height :"20px", background: color}}></span>
            </p>
            <button onClick={()=>setColor("#050505ff")}>negro</button>
            <button onClick={()=>setColor("#e6dbdbff")}>blanco</button>
            <button onClick={()=>setColor("#f30ac1ff")}>rosa</button>
        </div>
    )
}

