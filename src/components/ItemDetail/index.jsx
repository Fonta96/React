import React from 'react'
import Detail from '../Detail'

const ItemDetail = ({character}) => {
  return (
    character.map(character => {
        return <Detail character={character}/>
    })
    )
}

export default ItemDetail