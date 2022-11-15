import React from 'react'
import Item from '../Item'
import "./style.css"

//Se encarga de hacer el map con los productos
const ItemList = ({ products }) => {
  return (
    <div className='cardsContainer'>{
      products.map(product => {
        return <Item product={product} />
      })}
    </div>
  )
}

export default ItemList