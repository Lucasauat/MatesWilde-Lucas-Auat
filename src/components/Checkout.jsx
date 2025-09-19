import React, { useContext, useState } from 'react'
import { CartContext } from '../context/CartContext'
import { addDoc, collection, serverTimestamp } from 'firebase/firestore'
import { db } from '../service/firebase'
import "../css/Checkout.css"
import { useForm } from 'react-hook-form'

const Checkout = () => {
  
    const [orderId, setOrderId] = useState (null)
    const {cart, total, clear} = useContext(CartContext)
    const {register, handleSubmit, formState:{errors}, getValues} = useForm()

  
    const finalizarCompra = (data) => {
      
        let orden = {
         comprador: {
            name:data.name,
            lastname:data.lastname,
            address:data.address,
            email:data.email
         },
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
        <form className='checkout-form' onSubmit={handleSubmit(finalizarCompra)}>
            <input placeholder='Ingrese su nombre' name='name' className='form-control'type="text" {...register("name", {required:true, minLength:3})}/>
                {errors?.name?.type === 'required' && <p style={{color:'red'}}>Por favor complete el campo</p>}
                {errors?.name?.type === 'minLength' && <p style={{color:'red'}}>El nombre debe tener minimo 3 caracteres</p>}
            <input placeholder='Ingrese su apellido' name='lastname' className='form-control'type="text" {...register("lastname", {required:true, minLength:3})}/>
                {errors?.lastname?.type === 'required' && <p style={{color:'red'}}>Por favor complete el campo</p>}
                {errors?.lastname?.type === 'minLength' && <p style={{color:'red'}}>El apellido debe tener minimo 3 caracteres</p>}
            <input placeholder='Ingrese su direccion' name='address' className='form-control'type="text" {...register("address", {required:true, minLength:10, maxLength:30})}/>
                {errors?.address?.type === 'required' && <p style={{color:'red'}}>Por favor complete el campo</p>}
                {errors?.address?.type === 'minLength' && <p style={{color:'red'}}>La dirección debe tener minimo 10 caracteres</p>}
                {errors?.address?.type === 'maxLength' && <p style={{color:'red'}}>La dirección es demasiado larga</p>}
            <input placeholder='Ingrese su correo' name='email' className='form-control'type="email" {...register("email", {required:true})}/>
                {errors?.email?.type === 'required' && <p style={{color:'red'}}>Por favor complete el campo</p>}
            <input placeholder='Reptita su correo' name='second-email' className='form-control'type="email" {...register("secondemail", {required:true, validate: {equalsEmail: mail2 => mail2 === getValues().email}})}/>
                {errors?.secondemail?.type === 'required' && <p style={{color:'red'}}>Por favor complete el campo</p>}
                {errors?.secondemail?.type === 'equalsEmail' && <p style={{color:'red'}}>Los Email no coinciden</p>}
            <button className='btn btn-dark' type='submit'>Completar Compra!</button>
        </form>
    </div>
    }
    </>
  )
}

export default Checkout