import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import MostrarPessoas from './components/MostrarPessoas'

function App() {
  const [count, setCount] = useState(0)
  const pessoas = [
    {id:4323424 , nome: "Joao", idade: 20, profissao: "programador"},
    {id:432432, nome: "Maria", idade: 15, profissao: "estudante" },
    {id:34324, nome: "Carlos", idade: 30, profissao: "designer" },
    {id:32132, nome: "Ana", idade: 18, profissao: "estudandte" },
    {id:32543, nome: "Pedro", idade:22, profissao: "estudante" },
    {id:4352, nome: "Juliana",idade: 35, profissao: "advogada" },
    {id:54352, nome: "Fernando", idade: 40, profissao: "professor" },
    {id:4324342, nome: "Larissa", idade: 17, profissao: "estudante" }
  ]
  
  return (
    <>
      <h1>LISTA DE PESSOAS</h1>
      <div className="container">
        {pessoas.map((pessoa)=>(
          <MostrarPessoas key={pessoa.id} nome= {pessoa.nome} idade = {pessoa.idade} profissao = {pessoa.profissao}/>
      ))}
      </div>
      
    </>
  )
}

export default App
