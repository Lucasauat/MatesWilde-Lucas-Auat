import {use, useEffect, useState} from 'react'

const ItemCount = () => {
const[count, setCount] = useState(0)

    const sumar = () =>{
        setCount(count + 1)
    }
    const restar = () =>{
        setCount(count - 1)
    }

    useEffect(()=>{
        console.log('me ejecuto siempre')
    })

    useEffect(()=>{
        console.log('se ejecurta una sola vez')
    },[])

    useEffect(()=>{
        console.log('se ejecuta cuando cambia, comprar')
    },[])
    return (
        <div>
            <button onClick={restar}>-</button>
            <span>{count}</span>
            <button onClick={sumar}>+</button>
        </div>
    )
}
export default ItemCount 