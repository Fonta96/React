import React from 'react'
import { useNavigate } from 'react-router-dom';
import './style.css'

const Item = ({product}) => {

const navigate = useNavigate()

  const detallePersonaje = () => {
    //Navegar hacia el detalle del producto
    navigate(`/category/detail/${product.name}`)
  }


//Card
  return (
    <div onClick={detallePersonaje} className="estiloPersonaje" key={product.id}>
      <img src={product.imageUrl} alt="character"/>
      <p>Status:{product.status}</p>
      <p>{product.name}, stock: {10}</p>
    </div>
  )
}



export default Item