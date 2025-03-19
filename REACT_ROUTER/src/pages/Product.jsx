import React from 'react'
import { useParams } from 'react-router-dom'
import { useFetch } from '../hooks/useFetch'
import styles from "./Product.module.css"
import SearchForm from '../components/SearchForm'
const Product = () => {
    const {id} = useParams()
    const url = `http://localhost:3000/products/${id}`

    const {data: product,loading,error} = useFetch(url)
    
    
    return (
        <>
            {error && <p>{error}</p>}
            {loading && <p>{loading}</p>}
           
            {product && 
                	
                <div className={styles.product_view}>
                    <div className={styles.product_img}>
                        <img src={product.img} alt="" />
                    </div>
                   
                   <div className={styles.product_details}>
                   <h2>{product.name}</h2>                  
                    <p>{product.description}</p>
                    <p>Marca: {product.brand}</p>
                    <p>R$ {product.price}</p>
                   </div>
                    
                   
                </div>    
            }
        </>
        
      );
    }      


export default Product