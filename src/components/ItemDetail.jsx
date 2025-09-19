import React, { useState, useContext } from 'react'
import { NavLink, Link } from 'react-router-dom'
import "../css/ItemDetail.css"
import ItemCount from './ItemCount'
import { CartContext } from '../context/CartContext'
import toast, { Toaster } from 'react-hot-toast';


const ItemDetail = ({detalle}) => {
const [purchase, setPurchase] = useState(false)
const {addItem, itemQuantity}=useContext(CartContext)

  const onAdd = (cantidad) => {
    setPurchase(true)
    addItem(detalle, cantidad)

    toast.success(`Agregaste ${cantidad} ${detalle.name} al carrito`)
  }

  const stockActualizado = detalle.stock - itemQuantity(detalle.id)

  return (
   <>
  <h1 className="product-heading">Detalle del producto: </h1>
    <div className="product-card">
      <img src={detalle.img} alt={detalle.name} className="product-image" />
      <div className="product-details">
        <h2 className="product-title">{detalle.name}</h2>
        <p className="product-description">{detalle.description}</p>
        <p className="product-price">${detalle.price},00</p>
        <p className="product-stock">Stock disponible: {stockActualizado}</p>
        <NavLink className="btn-back" to="/">Volver</NavLink>
      </div>
      {purchase ? <Link to='/cart' className='btn-buy'>Ir al carrito</Link> : <ItemCount stock={stockActualizado} onAdd={onAdd}/>}
    </div>
    <Toaster/>
</>
  )
}

export default ItemDetail