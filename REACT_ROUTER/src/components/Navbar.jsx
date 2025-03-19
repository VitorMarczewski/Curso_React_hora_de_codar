import React from 'react'
//aula 2 usando links
import { Link } from 'react-router-dom'
import styles from './Navbar.module.css'

const Navbar = () => {
  return (
    <nav className={styles.navbar}>
        <Link to="/"><h1>Home</h1></Link>
        <div>
            <ul className={styles.navLinks}>
                <li>
                    <Link to="/about">Sobre</Link>
                </li>
            </ul>
        </div>
    </nav>
  )
}

export default Navbar