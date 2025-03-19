import {useState,useEffect} from 'react';


const Register = () => {
    /*states para cadastro do usuário */
    const [displayName, setDisplayName] = useState("");
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const [confirmPassword, setConfirmPassword] = useState("");
    const [error, setError] = useState("");

    const handleSubmit = (e)=>{
        e.preventDefault()

        setError("")

        const user = {
            displayName,
            email,
            password
        }

        if(password !== confirmPassword){
            setError("As duas senhas não são iguais!!")
            return
        }

        console.log(user)
    }

  return (
    <div>
        <h1>Cadastra-se para postar</h1>
        <p>Crie seu usuário e compartilhe suas histórias</p>
        <form onSubmit={handleSubmit} >
            <label>
                <span>Nome:</span>
                <input 
                    type="text" 
                    placeholder='Digite seu nome' 
                    required 
                    name='name'
                    value={displayName}
                    onChange={(el)=> setDisplayName(el.target.value)}
                    />
                
            </label>    
            
            <label>
                <span>E-mail:</span>
                <input 
                    type="email" 
                    placeholder='Digite seu e-mail' 
                    required 

                    name='email'
                    autoComplete="username" 
                    value={email}
                    onChange={(el)=> setEmail(el.target.value)}
                    />
            </label>
            
            <label>
                <span>Senha:</span>
                <input 
                    type="password" 
                    placeholder='Digite uma senha' 
                    required 
                    name='password' 
                    autoComplete="new-password"
                    value={password}
                    onChange={(el)=> setPassword(el.target.value)}

                    />




            </label>
            
            <label>
                <span>Confirmação de senha:</span>
                <input 
                    type="password" 
                    placeholder='Confirme a senha' 
                    required 
                    name='confirmPassword' 
                    autoComplete="new-password"
                    value={confirmPassword}
                    onChange={(el)=> setConfirmPassword(el.target.value)}
                    />
            </label>
            <button className='btn'>Cadastrar</button>
            {error && (
                <p className='error'>{error}</p>
            )}
        </form>
    </div>
  )
}

export default Register