import React from 'react'
import {NavLink} from 'react-router-dom';
import style from './Navbar.module.css'
const Navbar = () => {
  return (
    <nav>
        <h1>Context API</h1>
        <ul className={style.nav_list}>
            <li>
                <NavLink to="/home">HOME</NavLink>

            </li>
            <li>
                <NavLink to="/about">SOBRE</NavLink>
                
            </li>
            <li>
                <NavLink to="products">PRODUCTS</NavLink>
                
            </li>
        </ul>

    </nav>
  )
}

export default Navbar