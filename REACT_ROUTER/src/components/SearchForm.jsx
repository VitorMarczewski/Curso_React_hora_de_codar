import React from 'react'
import { useNavigate } from 'react-router-dom'
import { useState } from 'react'
import style from './SearchForm.module.css'

const SearchForm = () => {
    const [query, setQuery] = useState()
    const navigate = useNavigate()

    const handleSubmit = (e)=>{
        e.preventDefault()
        navigate('/search?q='+query)
    }
  return (
    <div className={style.search_form}>
        <form onSubmit={handleSubmit}>
           <div className="form-control">
            <input 
                type="text" 
                name='search' 
                placeholder='O que você está procurando? '  
                value={query}
                onChange={(e)=>setQuery(e.target.value)}
            />
           </div>
           <button>Buscar</button>
        </form>
    </div>
  )
}

export default SearchForm