import { useEffect, useState } from "react"
import { getProducts } from "../mock/AsyncMock.js"
import ItemList from "./ItemList.jsx"
import { useParams } from "react-router-dom"
import LoaderComponent from "./LoaderComponent.jsx"

const ItemListContainer = (props) => {
    const [data, setData] = useState ([])
    const [loader, setLoader] = useState(false)
    const {category}=useParams()

    useEffect(()=>{
        setLoader(true)
        getProducts()
        .then((res)=>{
            if(category){
                setData(res.filter((item)=> item.category === category))
            }else{
                setData(res)
            }
        })
        .catch((error)=>console.error(error))
        .finally(()=>setLoader(false))
    },[category])

    
    return(
    < >
    {loader 
    ? <LoaderComponent/>
    :  <div>
    <h1>{props.mensaje} {category && <span style={{textTransform:'capitalize'}}>{category}</span>}</h1>
    <ItemList data={data}/>
    </div>  
    }   
    </>
    )
}
export default ItemListContainer

