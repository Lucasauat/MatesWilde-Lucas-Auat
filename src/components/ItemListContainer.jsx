import { useEffect, useState } from "react"
import { getProducts, productos } from "../mock/AsyncMock.js"
import ItemList from "./ItemList.jsx"
import { useParams } from "react-router-dom"
import LoaderComponent from "./LoaderComponent.jsx"
import { addDoc, collection, getDocs, query, where } from "firebase/firestore"
import { db } from "../service/firebase.jsx"

const ItemListContainer = (props) => {
    const [data, setData] = useState ([])
    const [loader, setLoader] = useState(false)
    const {category}=useParams()

    useEffect(()=>{
        setLoader(true)
        // conectar con la collecion
        const productsCollection = category
         ? query(collection(db, "mates"), where("category" , "==", category))
         : collection(db, "mates")
        
        //los datos AKA documentos
        getDocs(productsCollection)
        .then((res)=>{
           
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

    return(
    <>
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

