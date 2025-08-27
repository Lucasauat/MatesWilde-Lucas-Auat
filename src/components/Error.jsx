import React from 'react'
import { Link } from 'react-router-dom'

const Error = () => {
  return (
    <div style={{
        display:'flex',
        flexDirection:'column',
        alignItems:'center',
        marginTop:10,
    }}>
        <img src='https://www.wnpower.com/blog/wp-content/uploads/sites/3/2023/06/error-404-que-es.png'
        alt='error'
        style={{ width:'60%', marginBottom:10}}/>
        <h1>Lo siento, la ruta no existe!</h1>
        <Link className='btn btn-dark' to='/'>Volver</Link>
    </div>
  )
}

export default Error