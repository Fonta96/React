import React from "react"
import { useEffect } from "react"
import "./style.css"
import { useState } from "react"
import { useParams } from 'react-router-dom'
import ItemList from '../../components/ItemList';
import { db } from "../../firebase/config"
import { collection, getDocs, query, where } from "firebase/firestore"

export default function ItemListContainer({ greeting }) {


    const [products, setProducts] = useState([])
    const { categoryId } = useParams()

    //uso de api
    console.log(db)
    useEffect(() => {
        (async () => {
            try {
               /* console.log(`https://dragon-ball-super-api.herokuapp.com/api/characters/${categoryId}` + " <esta es la direccion que busca")
                let response
                if (categoryId) {
                    response = await fetch(`https://dragon-ball-super-api.herokuapp.com/api/characters?status=${categoryId}`)
                } else {
                    response = await fetch(`https://dragon-ball-super-api.herokuapp.com/api/characters`);
                }*/
                //Codigo añadido de la documentacion de firestore
                //1er paso armar la query
                let q
                if (categoryId) {
                    q = query(collection(db, "Products"), where("status", "==", categoryId))
                } else {
                    q = query(collection(db, "Products"));
                }


               

               //2do paso: realizar la query
               const querySnapshot = await getDocs(q);
               const productosFirebase = []
               console.log(querySnapshot)
               querySnapshot.forEach((doc) => {
               // doc.data() is never undefined for query doc snapshots
                   console.log(doc.id, " => ", doc.data());
                   productosFirebase.push({...doc.data(), id: doc.id})
               });

                //const data = await response.json();

                setProducts(productosFirebase)
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








