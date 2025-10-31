import { useState } from "react"

export default function FormCheckout (){

    const [formData,setFormData] = useState({
        username:"", phone:""
    })
    function handleSubmit(event){
        event.preventDefault()
        console.log("submit form",event.target)
    }
    function handleInputCharge(event){
        const value= event.target.value;
        const inputName= event.target.name;
        console.log (event.target)
    }
    return (
        <div>
            <h4> completa tus datos</h4>
            
            <form onSubmit={handleSubmit}>
                <label>Nombre
                    <input
                    onCharge={handleInputCharge} name= "username" type= "text" placeholder="nadia"></input>
                </label>
                <label>email
                    <input
                    onCharge={handleInputCharge} name="email"type="email"  placeholder="nadia.na@"></input>
                </label>
                <label>telefono
                    <input
                    onCharge={handleInputCharge} name="phone"type="tel" placeholder="123456"></input>
                </label>
                <button>enviar</button>
            </form>
        </div>
    )
}