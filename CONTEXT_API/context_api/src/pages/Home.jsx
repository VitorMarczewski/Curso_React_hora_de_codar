
//hook para usar o contexto
import { useContext } from 'react'
//contexto criado
import { CountContext } from '../context/CounterContext'
//botão de incremento no counter
import ChangeCounter from '../components/ChangeCounter'
const Home = () => {
    //counter vem do contexto extraido usando useContext()
    const {counter} = useContext(CountContext)
    
    
  return (
    <>
    <h1>Home</h1>
    <p>Valor do contador: {counter}</p>
    <ChangeCounter/>
    </>
  )
}

export default Home