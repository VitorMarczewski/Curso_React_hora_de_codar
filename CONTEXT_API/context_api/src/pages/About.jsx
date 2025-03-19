import {useCounterContext} from '../hooks/useCounterContext'
import ChangeCounter from '../components/ChangeCounter'
const About = () => {
  const {counter}= useCounterContext()
  return (
    <>
      <h1>About</h1>
      <p>Valor do contador: {counter}</p>
      <ChangeCounter/>
    </>

  )
}

export default About