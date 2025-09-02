import React from "react";
import Item from './Item'
import '../css/ItemList.css'


const ItemList = ({data}) => {
    return (
        <div className = 'productos-container'>
            {data.map((prod)=> <Item key={prod.id} prod={prod}/>)}
        </div>
    )
}
export default ItemList

