import { createContext, useState } from "react";

export const CartContext = createContext()

export const CartProvider = ({children}) => {
    const [cart, setCart] = useState ([])

    const addItem = (item, qty)=> {
        if(isInCart(item.id)){
            console.log('ya esta en el carrito')
        }else{
            setCart([...cart, {...item,quantity:qty}])
        }
    }

    const clear = () =>{
        setCart([])
    }

    const removeItem = (id)=>{
        setCart(cart.filter((prod)=>prod.id !== id))
    }

    const isInCart = (id) =>{
        return cart.some((prod)=> prod.id === id)
    }

    return(
        <CartContext.Provider value={{cart, addItem, clear, removeItem}}> 
            {children}
        </CartContext.Provider>
    )
}