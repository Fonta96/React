import React from "react"
import { useEffect } from "react"
import "./style.css"
import { useState } from "react"
import { useParams } from 'react-router-dom'
import ItemList from '../../components/ItemList';

export default function ItemListContainer({ greeting }) {


    const [products, setProducts] = useState([])
    const { categoryId } = useParams()

    //uso de api

    useEffect(() => {
        (async () => {
            try {
                console.log(`https://dragon-ball-super-api.herokuapp.com/api/characters/${categoryId}` + " <esta es la direccion que busca")
                let response
                if (categoryId) {
                    response = await fetch(`https://dragon-ball-super-api.herokuapp.com/api/characters?status=${categoryId}`)
                } else {
                    response = await fetch(`https://dragon-ball-super-api.herokuapp.com/api/characters`);
                }
                const data = await response.json();
                setProducts(data)
            } catch (error) {
                console.log(error);
            }
        })()
    }, [categoryId])

    //agregados de api
    console.log(products + "< Este es el products")
    return (

        <>
            <ItemList products={products} />

        </>
    )
}





