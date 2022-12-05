import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import Detail from "../../components/Detail";


export default function ItemDetailContainer() {
    const [character, setCharacter] = useState(null)
    const { name } = useParams()


    //useEffect Traer la data segun el name

    useEffect(() => {
        const obtenerDatos = async () => {
            try {
                console.log(`https://dragon-ball-super-api.herokuapp.com/api/characters/${name}`)
                let response = await fetch(`https://dragon-ball-super-api.herokuapp.com/api/characters/${name}`)
                let data = await response.json();
                setCharacter(data)
            } catch (error) {
                console.log(error);
            }
        }
        obtenerDatos()
    }, [])

    return (

        <div>
            <ul>
                {character && (<Detail character={character} />)}
            </ul>
        </div>
    )

};
