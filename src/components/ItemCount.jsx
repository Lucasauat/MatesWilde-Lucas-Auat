import {use, useEffect, useState} from 'react'
import '../css/ItemCount.css'

const ItemCount = () => {
const[count, setCount] = useState(0)

    const sumar = () =>{
        setCount(count + 1)
    }
    const restar = () =>{
        setCount(count - 1)
    }

    return (
        <div className='count'>
            <button className="button-counter" onClick={restar} disabled={count === 0}>-</button>
            <span>{count}</span>
            <button className="button-counter" onClick={sumar}>+</button>
        </div>
    )
}
export default ItemCount 