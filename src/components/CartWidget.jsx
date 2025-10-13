import { FaShoppingCart } from "react-icons/fa";
import { useContext } from "react";
import cartContext from "../contex/cartContext";


    export default function CartWidget() {
    const { countItems} = useContext( cartContext)
    return (
        <div style={{fontSize:"20px"}}>
            <FaShoppingCart/>
            <span>{countItems()}</span>
        </div>
    )
}
