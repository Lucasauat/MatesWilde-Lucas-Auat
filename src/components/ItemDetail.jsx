import React from 'react'
import { NavLink } from 'react-router-dom'
import "../css/ItemDetail.css"


const ItemDetail = ({detalle}) => {
  return (
   <>
  <h1 className="product-heading">Detalle del producto:
    
  </h1>

  <div className="product-card">
    <img src={detalle.img} alt={detalle.name} className="product-image" />

    <div className="product-details">
      <h2 className="product-title">{detalle.name}</h2>
      <p className="product-description">{detalle.description}</p>
      <p className="product-price">${detalle.price},00</p>
      <p className="product-stock">Stock disponible: {detalle.stock}</p>

      <div className="button-comprar">
        <button className="btn-buy">🛒 Comprar</button>
      </div>

      <NavLink className="btn-back" to="/">Volver</NavLink>
    </div>
  </div>
</>


  )
}

export default ItemDetail