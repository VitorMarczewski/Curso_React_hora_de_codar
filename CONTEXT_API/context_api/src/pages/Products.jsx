import {useContext} from 'react';
import { CountContext } from '../context/CounterContext';
import ChangeCounter from '../components/ChangeCounter';
const Products = () => {
  const {counter} = useContext(CountContext)

  return (
  
  <>
    <h1>Products</h1>
    <p>Valor do contador: {counter}</p>
    <ChangeCounter/>
  </>

  )
}

export default Products