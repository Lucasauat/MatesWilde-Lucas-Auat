import React, { useContext } from "react"
import { CartContext } from "../context/CartContext"

const CartWidget = () => {


    const {cart} = useContext(CartContext)
    console.log(cart,'contexto')
    return(
        <div>
            <span>🛒</span>
            <span>85</span>
        </div>
    )
}
export default CartWidget