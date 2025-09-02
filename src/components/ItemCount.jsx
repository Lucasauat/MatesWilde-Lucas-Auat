import { useEffect, useState} from 'react'
import '../css/ItemCount.css'

const ItemCount = ({stock, onAdd}) => {
const[count, setCount] = useState(1)

    const sumar = () =>{
        if(count < stock){
            setCount(count + 1)
        }
    }
    const restar = () =>{
        if(count > 0){
            setCount(count - 1)
        }
    }

    return (
        <div className='count'>
            <button className="button-counter" onClick={restar} disabled={count === 0}>-</button>
            <span>{count}</span>
            <button className="button-counter" onClick={sumar}  disabled={count === stock}>+</button>
                <div className="button-comprar">
                        <button className="btn-buy" disabled={stock === 0 || count === 0} onClick={()=> onAdd(count)}>🛒 Comprar</button>
                </div>
        </div>
        
    )
}
export default ItemCount 