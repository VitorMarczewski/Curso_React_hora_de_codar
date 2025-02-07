import styles from './MyForm.module.css'
import { useState } from 'react'

const MyForm = () => {
  const [name,setName] = useState('')
  const [email,setEmail]= useState('')
  const [bio,setBio]= useState('')
  // 1º forma de resgatar o dado do input
  const handleName = (e)=>{
    //acessando o valor do target do evento e enviando para o setName
    setName(e.target.value)

  }  
  //2º forma é diretamente no atributo onChange

  //Função de envio do formulário
  const handleSubmit= (event)=>{
    event.preventDefault()
    console.log(`Enviou o formulario: nome: ${name} email: ${email} descrição : ${bio}`)
    //Limpando campos do formulário
    setName("")
    setEmail("")
    setBio("")
  }
  
 
  return (
   

    <div>
        {/*Criando o formulario */}
        <form className={styles.form_container} onSubmit={handleSubmit}>
            <div className={styles.form_control}>
                <label htmlFor="name">Nome:</label>
                <input type="text" name="namw" placeholder="Digite seu nome" onChange={handleName} value={name}/>
            </div>
            {/*Label envolvendo o input */}
            <label className={styles.form_control}>
              <span>E-mail:</span>
              <input type="text" name='email' placeholder='Digite seu e-mail' onChange={(e)=>setEmail(e.target.value)} value={email}/>
            </label>
            <label className={styles.form_control}>
              <span>Descrição:</span>
              <textarea name="bio" placeholder ="Descreva você" onChange={(e)=>setBio(e.target.value)} value={bio}></textarea>
            </label>
            <input type="submit" value='Enviar' />
        </form>
    </div>
  )
}

export default MyForm