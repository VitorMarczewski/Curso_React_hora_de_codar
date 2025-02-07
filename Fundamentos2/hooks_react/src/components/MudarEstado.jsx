import {useState} from 'react'
import styles from "./MudarEstado.Module.css"
const MudarEstado = () => {
    let number = 10
    const [number2,setNumber2]= useState(10)
  return (
    <div >
        <h2>USE STATE</h2>
        <div className={styles.container}>
            <div>
                <p>Mudando o valor da variável sem o useState</p>
                <p>{number}</p>
                <button onClick={(()=>number=number*2)}>Duplicar valor</button>
            </div>
            <div>
                <p>Mudando o valor da variável com o useState</p>
                <p>{number2}</p>
                <button onClick={(()=>setNumber2(number2*2))}>Duplicar valor</button>
            </div>
        </div>
    </div>
  )
}

export default MudarEstado