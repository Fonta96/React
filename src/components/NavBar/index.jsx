import React from "react"
import CartWidget from "../CartWidget"
import "./style.css"

const NavBar = () =>{
    return(
        <ul>
            <li><a href="#">Home</a></li>
            <li><a href="#">Fragancias Hombre</a></li>
            <li><a href="#">Fragancias Mujer</a></li>
            <CartWidget/>
        </ul>
    )
}

export default NavBar 