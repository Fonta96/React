import React, { useEffect, useState } from "react";
import ItemDetail from "../../components/ItemDetail";
import { useParams } from "react-router-dom";

console.log("Entro a item detail container")
export default function ItemDetailContainer() {


    
    const [character, setCharacter] = useState(null)
    const {name} = useParams()

    useEffect(() => {
        console.log("entro en useEffect")
        (async () => {
            try {
                console.log(`https://dragon-ball-super-api.herokuapp.com/api/characters/${name}`)
                let response = await fetch(`https://dragon-ball-super-api.herokuapp.com/api/characters/${name}`)
                console.log(response + " >Esta es la response del detail")
                let data = await response.json();
                console.log(data + " <esta es la Data del detail ")
                setCharacter(data)
            } catch (error) {
                console.log(error);
            }
        })()
    }, [name])


return ( <ItemDetail character={character}/>)

};
