import { useState, useRef } from "react"
import styles from "./Game.module.css"

const Game = ({ verifyLetter, picketCategory, picketWord, letters, guesses, guessedLetters, wrongLetters, score }) => {
  const [letter, setLetter] = useState('')
  const letterInputRef = useRef(null)
  function handleSubmit(e) {
    e.preventDefault()

    verifyLetter(letter)

    setLetter('')

    letterInputRef.current.focus()
  }
  return (

    <div className={styles.game}>
      <p className={styles.points}>
        <span>PONTUAÇÃO: {score}</span>
      </p>
      <h1>ADIVINHE A PALAVRA</h1>
      <h3 className={styles.tip}>Dica sobre a palavra: <span>{picketCategory}</span></h3>
      <h3><p>Você possui {guesses} tentativas</p></h3>
      <div className={styles.word_container}>
        {letters.map((letter, i) => (
          guessedLetters.includes(letter) ? (
            <span className={styles.letter} key={i}>{letter}</span>
          ) : (
            <span className={styles.blank_square} key={i}></span>
          )
        ))}
      </div>
      <div className={styles.letter_container}>
        <p>tente advinhar uma letra da palavra:</p>
        <form onSubmit={handleSubmit}>
          <input type="text" name="letter" maxLength='1' required onChange={(e) => setLetter(e.target.value)} value={letter} ref={letterInputRef} />
          <button value={letter}>JOGAR</button>
        </form>
      </div>
      <div className={styles.wrong_letters_container}>
        <p>Letras já utilizadas</p>
        {wrongLetters.length > 0 && (
          wrongLetters.map((letter, i) => (
            <span key={i}>{letter},</span>
          )))
        }
      </div>
    </div>

  )
}

export default Game