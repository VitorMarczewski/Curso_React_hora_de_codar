import {useState} from 'react'

const RenderizacaoCondicional = () => {
    const [usuario,setUsuario] = useState({nome: 'joao', autentificado: false})
    const login = ()=>{
        setUsuario({autentificado: true})
        console.log(usuario)
    }
  return (
    <div>
        <h2>RENDERIZAÇÃO CONDICIONAL</h2>
        {usuario.autentificado ? 
        (
            <p>Olá {usuario.nome}, você está autentificado</p>
        ) :
        (
            <>
            <p>Olá {usuario.nome}, você não está autentificado, por favor realize o login</p>
            <button onClick={login}>Fazer login</button>
            </>
            
        )}
    </div>
  )
}

export default RenderizacaoCondicional