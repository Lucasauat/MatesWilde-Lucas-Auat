import React, { useEffect, useState } from 'react'
import ItemDetail from './ItemDetail'
import { getItem } from '../mock/AsyncMock'
import { Link, useParams } from 'react-router-dom'
import LoaderComponent from './LoaderComponent'
import { db } from '../service/firebase'
import { doc, getDoc } from 'firebase/firestore'

const ItemDetailContainer = () => {
    const [detalle, setDetalle] = useState({})
    const [cargando, setCargando] = useState(false)
    const [incorrecto, setIncorrecto] = useState(null)
    const {id} = useParams()

    useEffect(()=>{
      setCargando(true)
      const docRef = doc(db, "mates", id)
      getDoc(docRef)
      .then((res)=> {
        if(res.data()){
          setDetalle({id: res.id, ...res.data()})
        }else{
          setIncorrecto(true)
        }
      })
      .catch((error)=> console.error(error))
      .finally(()=>setCargando(false))
    },[id])

    if(incorrecto){
      return(
        <div>
          <h1 style={{textAlign:'center'}}>El Mate que buscas, no lo tengoo :/</h1>
          <Link to='/' className='btn btn-dark'>Ir a casa</Link>
        </div>
      )
    }

   
  return (
    <>
    {
      cargando
      ?  <LoaderComponent/>
      : <ItemDetail detalle={detalle}/>
    }
    </>
  )
}

export default ItemDetailContainer