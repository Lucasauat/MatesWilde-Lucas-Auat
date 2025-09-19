import React, { useContext } from 'react'
import { CartContext } from '../context/CartContext'
import "../css/CartView.css"
import { Link } from 'react-router-dom'
import toast, { Toaster } from 'react-hot-toast';


const CartView = () => {
  const {cart, removeItem, clear, total} = useContext(CartContext)
const preConfirm = () => {
  toast((t) => (
    <span style={{ display: 'flex', flexDirection: 'column', gap: '10px' }}>
      <b>¿Estás seguro de borrar todo el carrito?</b>
      <div style={{ display: 'flex', justifyContent: 'flex-end', gap: '10px' }}>
        <button
          style={{ backgroundColor: '#dc3545', color: 'white', border: 'none', padding: '5px 10px', borderRadius: '4px' }}
          onClick={() => {
            clear();
            toast.dismiss(t.id); 
            toast.success("Carrito vaciado");
          }}
        >
          Confirmar
        </button>
        <button
          style={{ backgroundColor: '#6c757d', color: 'white', border: 'none', padding: '5px 10px', borderRadius: '4px' }}
          onClick={() => toast.dismiss(t.id)}
        >
          Cancelar
        </button>
      </div>
    </span>
  ), {
    duration: 6000,
    position: 'top-center',
  });
};

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
    <button className="btn-clear" onClick={preConfirm}>Vaciar Carrito</button>
    <Link className="btn-buy" to='/checkout'>Terminar compra</Link>
  </div>
<Toaster/>
</div>
  )
}

export default CartView