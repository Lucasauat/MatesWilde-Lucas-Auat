import React from 'react'
import { NavLink } from 'react-router-dom'


const ItemDetail = ({detalle}) => {
  return (
    <div className="" >
        <h1>Detalle del producto: {detalle.name}</h1>
        <img src={detalle.img} alt={detalle.name} className="img-fluid w-25"/>
        <p className="fst-italic">{detalle.description}</p>
        <p className="fw-semibold">${detalle.price},00</p>
        <p className="fw-semibold">Stock disponible: {detalle.stock}</p>
        <NavLink className='btn btn-warning' to='/'>Volver</NavLink>
    </div>
  )
}

export default ItemDetail