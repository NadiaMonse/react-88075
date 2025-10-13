import { createContext, useState } from "react";


const CartContext =createContext();

export function CartProvider(props){
    const[ cartItems, setCartItems] = useState([]);

    function addToCart(newItem){

        const newCartItems = structuredClone(cartItems);
        const isInCart =cartItems.some(item=>item.id === newItem.id)

        if(isInCart){
            const index = cartItems.findIndex(item=>item.id === newItem.id)
            newCartItems[index]. count = newCartItems[index].count + 1;
        }
        else{
        newCartItems.push({...newItem, count : 1});
        }
        setCartItems(newCartItems)
        alert(`agregaste ${newItem.title} al carrito`);
    }
    function removeItem(idRemove){
        let newCartItems = structuredClone(cartItems);

        const isInCart = cartItems.filter(item => item.id === idRemove)
        const countInCart= isInCart.count;
        if (countInCart > 1){
            const index =cartItems.findIndex( item => item.id === idRemove);
            newCartItems[index].count--;
        }
        else {
            newCartItems = cartItems.filter(item=> item.id !== idRemove)
        }

        setCartItems(newCartItems)
        
    }

        function countItems(){
            let count = 0;
            cartItems.forEach(item=> count += item.count)
            return count;
        }
    return(
        <CartContext.Provider value={{ cartItems, addToCart, countItems, removeItem}}>;
            { props.children }
        </CartContext.Provider>
    );
}

export default CartContext;
