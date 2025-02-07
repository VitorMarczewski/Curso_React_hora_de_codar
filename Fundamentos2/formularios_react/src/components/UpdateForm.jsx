import styles from './MyForm.module.css'
import { useState } from 'react'

const UpdateForm = ({user}) => {
    /*Para formularios que recebem props */
    /*Se vier o user ele preenche os dados com os valores ou vazio */
    const [name,setName] = useState(user ? user.name : "")
    const [email,setEmail]= useState(user ? user.email : "")

    const handleName = (e)=>{
    setName(e.target.value)
    }  

    const handleSubmit= (event)=>{
        event.preventDefault()
        console.log(`Enviou o formulario: nome: ${name} email: ${email}`)
        //Limpando campos do formulário
        setName("")
        setEmail("")
    }


    return (


    <div>
        <h2>Formulário de edição</h2>
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
            <input type="submit" value='Enviar' />
        </form>
    </div>
    )
    }

export default UpdateForm