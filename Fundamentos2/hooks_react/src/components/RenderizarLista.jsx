import {useState} from 'react'

const RenderizarLista = () => {
    const [usuarios,setUsuarios] = useState([
        {id: 1, nome:"Joao", idade: 20},
        {id:2,nome:"Matheus", idade:30},
        {id:3, nome:"José", idade:40}
    ])
    const excluirAleatoriamente= () =>{
        const numeroAleatorio = Math.floor(Math.random() * 4)

        setUsuarios((prevUsuarios)=>{ 
            return prevUsuarios.filter((usuario)=>numeroAleatorio !== usuario.id)
        })

    }
  return (
    <div>
        <h2>RENDERIZANDO LISTAS </h2>
        <div>
            <ul>
                {usuarios.map((usuario)=>(
                    <li key={usuario.id}>{usuario.nome} - {usuario.idade}</li>
                ))}
            </ul>
            <button onClick={excluirAleatoriamente}>Exluir aleatóriamente</button>
        </div>
    </div>
  )
}

export default RenderizarLista