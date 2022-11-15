import React from 'react'

const Detail = ({character}) => {


  return (
    <div>
      <img src={character.imageUrl} alt="character"/>
      <p>Name: {character.name}<br/>Specie: {character.specie}<br/>Role: {character.role}<br/>Status: {character.status}<br/>Universo:{character.universe},{character.transform},{character.originplanet} <br/>stock: {10}</p>
    </div>
  )
}

export default Detail