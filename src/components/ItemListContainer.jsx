import { useEffect, useState } from "react"
import { getProducts } from "../mock/AsyncMock.js"
import ItemList from "./ItemList.jsx"

const ItemListContainer = (props) => {
    const [data, setData] = useState ([])
    useEffect(()=>{
        getProducts()
        .then((res)=> setData(res))
        .catch((error)=>console.error(error))
    },[])
    console.log(data)
    return(
        <div>
            <h1>{props.mensaje}</h1>
            <ItemList data={data}/>
        </div>
    )
}
export default ItemListContainer