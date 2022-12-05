import React from "react"
import { Link } from "react-router-dom";
import CartWidget from "../CartWidget"
import "./style.css"

const NavBar = () =>{
    return(
        <ul>
        <li>
            <Link to="/">Home</Link>
        </li>
        <li>
            <Link to="/category/Vivo">Vivo</Link>
        </li>
        <li>
            <Link to="/category/Muerto">Muerto</Link>
        </li>
        <CartWidget />
    </ul>
);
};
  

export default NavBar 