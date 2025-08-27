import { useEffect, useState } from "react"
import { getProducts } from "../mock/AsyncMock.js"
import ItemList from "./ItemList.jsx"
import { useParams } from "react-router-dom"

const ItemListContainer = (props) => {
    const [data, setData] = useState ([])
    const {category}=useParams()

    useEffect(()=>{
        getProducts()
        .then((res)=>{
            if(category){
                setData(res.filter((item)=> item.category === category))
            }else{
                setData(res)
            }
        })
        .catch((error)=>console.error(error))
    },[category])

    
    return(
        <div>
            <h1>{props.mensaje} {category && <span style={{textTransform:'capitalize'}}>{category}</span>}</h1>
            <ItemList data={data}/>
        </div>
    )
}
export default ItemListContainer

