import React from "react"
import { useEffect } from "react"
import "./style.css"
import { newProducts } from "../../../Data/productos"
import { useState } from "react"

export default function ItemListContainer({ greeting }) {


    const [products, setProducts] = useState([])
    useEffect(() => {

        (async () => {
            const obtenerProductos = () => {
                return new Promise((resolve, reject) => {
                    setTimeout(() => {
                        resolve(newProducts);
                    }, 2000)
                });
            }

            const response = await obtenerProductos()
            console.log(response)
            setProducts(response)
        })()

    }, [])

    return (

        <>
            {products.map(products => {
                return <p key={products.id}>{products.description}, stock:{products.stock}</p>
            })}
            <div className="item-list-container">
                <h2>{greeting}</h2>
            </div>
            < itemList products={products} />
        </>
    )

}


