import React, { useState } from 'react'
import { useNavigate } from 'react-router-dom';
import ItemCount from "../ItemCount";

const Detail = ({character}) => {
  const [quantityItemDetail, setQuantityItemDetail] = useState(0);
  const navigate = useNavigate();
  const confirmPurchase = (quantity) => {
    addProduct({...character, quantity})
    setQuantityItemDetail(quantity);
}

const handleNavigate = () => {
  navigate('/cart')
}
  return (
    <div>
      <img src={character.imageUrl} alt="character"/>
      <h1>Name: {character.name}</h1>
      <p><br/>Specie: {character.specie}<br/>Role: {character.role}<br/>Status: {character.status}<br/>Universo:{character.universe},{character.transform},{character.originplanet} <br/>stock: {10}</p>
              {quantityItemDetail ? 
                <button onClick={handleNavigate}>Go cart</button>
              : 
                <ItemCount onAdd={confirmPurchase} initial={1} stock={character.quantity} />
              }
    </div>
  )
}

export default Detail