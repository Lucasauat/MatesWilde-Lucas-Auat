import React, { useContext } from 'react'
import { CartContext } from '../context/CartContext'
import "../css/CartView.css"
import { Link } from 'react-router-dom'


const CartView = () => {
  const {cart, removeItem, clear, total} = useContext(CartContext)
  return (
   <div className="cart-container">
  <h1>🛒 Tu carrito</h1>

  <div className="cart-header">
    <span>Id</span>
    <span>Producto</span>
    <span>Precio</span>
    <span>Cantidad</span>
    <span>Subtotal</span>
    <span>Acción</span>
  </div>

  <div>
    {cart.map((compra) => (
      <div key={compra.id} className="cart-item">
        <span className="cart-id">{compra.id}</span>

        <span className="cart-product">
          <img src={compra.img} alt={compra.name} />
          {compra.name}
        </span>

        <span>${compra.price},00</span>
        <span>{compra.quantity}</span>
        <span>${compra.quantity * compra.price},00</span>

        <button className="btn-remove" onClick={() => removeItem(compra.id)}>X</button>
      </div>
    ))}
  </div>

  <div className="cart-total">
    <span>Total a pagar: ${total()},00</span>
  </div>

  <div className="cart-buttons">
    <button className="btn-clear" onClick={clear}>Vaciar Carrito</button>
    <Link className="btn-buy" to='/checkout'>Terminar compra</Link>
  </div>
</div>
  )
}

export default CartView