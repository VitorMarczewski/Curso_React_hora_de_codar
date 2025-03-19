import React from 'react'
import {Link,useSearchParams} from 'react-router-dom'
import { useFetch } from '../hooks/useFetch'
import styles from './Home.module.css'
const Search = () => {
    const [searchParams] = useSearchParams()
    const url = 'http://localhost:3000/products?'+searchParams

    const {data: items, loading,error} = useFetch(url)
    console.log(items)

  return (
    <div>
        <h1>RESULTADOS:</h1>
        {items && (
              <ul className={styles.list_products}>
                {items.map((item)=>(
                  <li>
                    <h2>{item.name}</h2>
                    <p>R$ {item.price}</p>
                    <Link to={`/product/${item.id}`}>Detalhes</Link>
                  </li>
                ))}
              </ul>
            )}
    </div>
  )
}

export default Search