import React, { useEffect, useState } from 'react'
import { useParams } from 'react-router-dom'
import ItemList from '../ItemList'

export const ItemsByStatus = () => {
    const [characters, setCharacters] = useState([])

    const{status}=useParams()
    useEffect(() => {
      const getCharacters=async() =>{
          const response = await fetch(`https://dragon-ball-super-api.herokuapp.com/api/characters`);  
          const data = await response.json()  
          const characterFilter = data.filter(character=>character.status===status)
          setCharacters(characterFilter)
      }
      getCharacters()
      
    }, [status])
    
  return (
    <div>{characters&&<ItemList products={characters}/>}</div>
  )
}

