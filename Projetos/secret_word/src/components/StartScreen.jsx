import styles from './StartScreen.module.css'

const StartScreen = ({startGame}) => {
  return (
    <div className={styles.start}>
        <h1>Secret Word</h1>
        
        <button onClick={startGame} >COMEÇAR O JOGO</button>
    </div>
  )
}

export default StartScreen