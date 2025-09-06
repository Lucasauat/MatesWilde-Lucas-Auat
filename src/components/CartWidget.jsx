import React, { useContext } from "react"
import { CartContext } from "../context/CartContext"

const CartWidget = () => {


    const {cart, cartQuantity} = useContext(CartContext)
  
    return(
        <div>
            <span>🛒</span>
            <span>{cartQuantity()}</span>
        </div>
    )
}
export default CartWidget