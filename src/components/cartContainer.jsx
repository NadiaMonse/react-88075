
import { useContext } from "react";
import cartContext from "../contex/cartContext";
import { createOrder } from "../data/firebase";



function CartContainer(){

    const orderData ={
        buyer:{name:"luciano"},
        items:cartItems,
        price:999,
        date:new Data()
    }
    async function handleCheckout(){
        const newOrder = await createOrder(orderData);
        clearCart ();
    alert ("compra realizada con exito")
    }
    const {cartItems, removeItem} = useContext(cartContext)
    return(
        <div>
            <h3>Tu carrito</h3>
            <div>
            {
                cartItems.map( item => <div>
                    <img width="100" src={item.img}></img>
                    <h4>{item.title}</h4>
                    <p>Unidades:{item.count}</p>
                    <p>${item.price * item.count}</p>
                    <button onClick={()=>removeItem(item.id)}>Quitar del carrito</button>
                    </div>
                )
            }
            </div>
            <button onClick={()=>createOrder(orderData)}>Ir a pagar</button>
            <FormCheckout/>
        </div>
    )
}
export default CartContainer;