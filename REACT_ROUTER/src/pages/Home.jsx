import React from 'react'
import {useFetch} from "../hooks/useFetch"
import styles from './Home.module.css'
import { Link } from 'react-router-dom'
const Home = () => {

  const url = 'http://localhost:3000/products'
  const {data: items, loading,error}= useFetch(url)
  return (
    <>
    <h1 className={styles.title}>PRODUTOS</h1>
    {error && <p>{error}</p>}
    {items && (
      <ul className={styles.list_products}>
        {items.map((item)=>(
          <li>
            <h2>{item.name}</h2>
            <p>R$ {item.price}</p>
            <Link to={`product/${item.id}`}>Detalhes</Link>
          </li>
        ))}
      </ul>
    )}
    </>
    
  ) 
}

export default Home