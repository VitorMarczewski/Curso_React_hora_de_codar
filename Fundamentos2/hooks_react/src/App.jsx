import { useState } from 'react'
import './App.css'
/*COMPONENTES*/
import MudarEstado from './components/MudarEstado'
import RenderizarLista from './components/RenderizarLista'

import RenderizacaoCondicional from './components/RenderizacaoCOndicional'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      <h1>HOOKS DO REACT</h1>
      <MudarEstado/>
      <RenderizarLista/>
      <RenderizacaoCondicional/>
    </>
  )
}

export default App
