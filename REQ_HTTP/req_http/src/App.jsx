import { useState, useEffect } from 'react'
import {useFetch} from './hooks/useFetch'


function App() {
  const [count, setCount] = useState(0)

  const [products, setProducts] = useState([])
  const [url, setUrl] = useState("http://localhost:3000/products")
  

  //resgatando dados da api com custom hook useFetch
  const {data: items, httpConfig} = useFetch(url)
  
  const [name, setName] = useState('')
  const [price, setPrice] = useState('')

  //funcao de submissao do formulario
  const handleSubmit = async (e) => {
   e.preventDefault()
   const data ={
    name,price
   }

   //chama a função que altera o cabeçalho dinamicamente a partir do metodo passado
   httpConfig(data,'POST')
   //zerando os states
   setName('')
   setPrice('')

  
  }
  const handleDelete = (el)=>{
    const data= el.id

   httpConfig(data,'DELETE')
  }
 
  return (
    <>
      <div className="App">
      <div className='products-list'>
        <h1>LISTA DE PRODUTOS</h1>
        <ul>
            {items && items.map((el,i)=>(
              <li key={i}>{el.name} <span>R${el.price}</span> <button onClick={()=>handleDelete(el)}>Deletar</button> </li>
              
            ))}
        </ul>
       </div>
        <form onSubmit={handleSubmit} className="add-product">
          <h2>ADCIONAR PRODUTOS</h2>
          <label>
            <span>Nome:</span>
            <input type="text" placeholder='Digite o nome do produto' name='name' onChange={(e) => setName(e.target.value)} value={name} />
          </label>
          <label >
            <span>Preço:</span>
            <input type="text" placeholder='Digite o preço do produto' name='price' onChange={(e) => setPrice(e.target.value)} value={price} />
          </label>
          <input type="submit" value="CADASTRAR" />
        </form>
        
      </div>

    </>
  )
}

export default App
