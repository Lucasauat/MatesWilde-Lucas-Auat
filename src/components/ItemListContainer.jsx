import { useEffect, useState } from "react"
import { getProducts } from "../mock/AsyncMock.js"
import ItemList from "./ItemList.jsx"
import { useParams } from "react-router-dom"
import LoaderComponent from "./LoaderComponent.jsx"
import { collection, getDocs, query, where } from "firebase/firestore"
import { db } from "../service/firebase.jsx"

const ItemListContainer = (props) => {
    const [data, setData] = useState ([])
    const [loader, setLoader] = useState(false)
    const {category}=useParams()

    useEffect(()=>{
        setLoader(true)
        // conectar con la collecion
        const productCollection = category 
        ? query(collection(db, 'mates'), where("category", "==", category))
        : collection(db, 'mates')
        //los datos AKA documentos
        getDocs(productCollection)
        .then((res)=>{
            console.log(res.docs)
            const list = res.docs.map((doc)=>{
                return { 
                    id: doc.id,
                    ...doc.data()
                }
            })
            setData(list)
        })
        .catch((error)=> console.error(error))
        .finally(()=> setLoader(false))
    },[category])
    
    
    /* PROMESA
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
*/

    
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

