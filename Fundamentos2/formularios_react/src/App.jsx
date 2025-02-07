import { useState } from 'react'

import './App.css'
import MyForm from './components/MyForm'
import UpdateForm from './components/UpdateForm'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      <div>
        <h1>Meu primeiro formulário em React</h1>
        <MyForm/>
        <UpdateForm user={{name:"Joao",email: "Joao@gmail.com"}}/>
      </div>
    </>
  )
}

export default App
