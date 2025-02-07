import { useState } from 'react'
import './App.css'
import City from "./assets/city.jpg"

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      <h1>IMAGENS EM REACT</h1>
      {/*Imagem da pasta Public */}
      <div>
        <img src="/img1.jpg" alt="paisagem" />
        <p>imagem da pasta public</p>
      </div>
      {/*Imagem em assets */}
      <div>
        <img src={City} alt="cidade" />
        <p>imagem da pasta assets</p>
      </div>
    </>
  )
}

export default App
