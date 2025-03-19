import {useState,useEffect} from 'react';


const Register = () => {
  return (
    <div>
        <h1>Cadastra-se para postar</h1>
        <p>Crie seu usuário e compartilhe suas histórias</p>
        <form >
            <label>
                <span>Nome:</span>
                <input type="text" placeholder='Digite seu nome' required name='name' />
            </label>
            
            <label>
                <span>E-mail:</span>
                <input type="email" placeholder='Digite seu e-mail' required name='email' />
            </label>
            
            <label>
                <span>Senha:</span>
                <input type="password" placeholder='Digite uma senha' required name='password' />
            </label>
            
            <label>
                <span>Confirmação de senha:</span>
                <input type="password" placeholder='Confirme a senha' required name='confirmPassword' />
            </label>
            <button className='btn'>Cadastrar</button>
        </form>
    </div>
  )
}

export default Register