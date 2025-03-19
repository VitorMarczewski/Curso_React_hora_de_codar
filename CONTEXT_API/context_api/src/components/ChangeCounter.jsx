import {useContext} from 'react'
import { CountContext } from '../context/CounterContext'

const ChangeCounter = () => {
    const {counter, setCounter}  = useContext(CountContext);
  return (
    <div>
        <button onClick={ ()=> setCounter(counter + 1)}>Aumentar o contexto</button>
    </div>
  )
}

export default ChangeCounter