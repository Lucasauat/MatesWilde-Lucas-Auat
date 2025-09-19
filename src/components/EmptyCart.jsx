import React from 'react'
import { Link } from 'react-router-dom'

const EmptyCart = () => {
  return (
    <div>
        <h2 style={{textAlign:'center'}}>Tu carrito esta vacio!</h2>
        <h3 style={{textAlign:'center'}}>Te invitamos a ver nuestros productos :)</h3>
        <Link  className='btn btn-dark d-flex justify-content-center' to='/'>Ir a home</Link>
    </div>
  )
}

export default EmptyCart