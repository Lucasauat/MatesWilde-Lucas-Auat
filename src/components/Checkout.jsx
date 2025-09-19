import React, { useContext, useState } from 'react'
import { CartContext } from '../context/CartContext'
import { addDoc, collection, serverTimestamp } from 'firebase/firestore'
import { db } from '../service/firebase'

const Checkout = () => {
    const [buyer, setBuyer] = useState({})
    const [validMail, setValidMail] = useState ('')
    const [orderId, setOrderId] = useState (null)
    const {cart, total, clear} = useContext(CartContext)

    const buyerData = (e) => {
        setBuyer(
            {
                ...buyer,
                [e.target.name]: e.target.value 
            }
        )
    }


    const finalizarCompra = (e) => {
        e.preventDefault()

        let orden = {
            comprador: buyer,
            compras: cart,
            total: total(),
            date: serverTimestamp()
        }
        const ventas = collection (db, "orders")
        addDoc(ventas, orden)
        .then((res)=>{
            setOrderId(res.id)
            clear()
        })
        .catch((error) => console.log(error))
    }
  return (
    <>
    { 
        orderId 
        ? <div>
            <h2>Realizaste tu compra con exito!</h2>
            <h3>El id de la compra : {orderId}</h3>
        </div>
        :<div>
            <h1>Complete el formulario con sus datos!</h1>
        <form onSubmit={finalizarCompra}>
            <input placeholder='Ingrese su nombre' name='name' className='form-control'type="text" onChange={buyerData}/>
            <input placeholder='Ingrese su apellido' name='lastname' className='form-control'type="text" onChange={buyerData}/>
            <input placeholder='Ingrese su direccion' name='address' className='form-control'type="text" onChange={buyerData}/>
            <input placeholder='Ingrese su correo' name='email' className='form-control'type="email" onChange={buyerData}/>
            <input placeholder='Reptita su correo' name='second-email' className='form-control'type="email" onChange={()=> setValidMail(e.target.value)}/>
            <button className='btn btn-dark' type='submit'>Completar Compra!</button>
        </form>
    </div>
    }
    </>
  )
}

export default Checkout