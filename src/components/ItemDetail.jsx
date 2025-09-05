import React, { useState, useContext } from 'react'
import { NavLink, Link } from 'react-router-dom'
import "../css/ItemDetail.css"
import ItemCount from './ItemCount'
import { CartContext } from '../context/CartContext'

const ItemDetail = ({detalle}) => {
const [purchase, setPurchase] = useState(false)
const {addItem}=useContext(CartContext)

  const onAdd = (cantidad) => {
    setPurchase(true)
    addItem(detalle, cantidad)
  }
  return (
   <>
  <h1 className="product-heading">Detalle del producto: </h1>
    <div className="product-card">
      <img src={detalle.img} alt={detalle.name} className="product-image" />
      <div className="product-details">
        <h2 className="product-title">{detalle.name}</h2>
        <p className="product-description">{detalle.description}</p>
        <p className="product-price">${detalle.price},00</p>
        <p className="product-stock">Stock disponible: {detalle.stock}</p>
        <NavLink className="btn-back" to="/">Volver</NavLink>
      </div>
      {purchase ? <Link to='/cart' className='btn btn-dark'>Ir al carrito</Link> : <ItemCount stock={detalle.stock} onAdd={onAdd}/>}
    </div>
</>
  )
}

export default ItemDetail