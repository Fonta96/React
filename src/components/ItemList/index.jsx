import React from 'react'
import Item from '../Item'
import "./style.css"

//Se encarga de hacer el map con los productos
const ItemList = ({ products }) => {
  return (
    <div className='cardsContainer'>{
      products.map((product,i) => {
        return <div key={i}>
          <Item product={product}/>

        </div>
      })}
    </div>
  )
}

export default ItemList