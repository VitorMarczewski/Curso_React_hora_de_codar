/*HOOKS*/
import { useEffect, useState } from 'react'
import './App.css'
/*DADOS*/
import { wordsList } from './data/words'
/*COMPONENTES*/
import Game from './components/Game'
import GameOver from './components/GameOver'
import StartScreen from './components/StartScreen'

//Status do game
const stages = [
  { id: 1, name: "start" },
  { id: 2, name: "game" },
  { id: 3, name: "end" }
]

function App() {

  const [gameStage, setGameStage] = useState(stages[0].name)

  const [words] = useState(wordsList)

  const [picketWord, setPicketWord] = useState("")
  const [picketCategory, setPicketCategory] = useState("")
  const [letters, setLetters] = useState([])

  /*LETRAS ACERTADAS*/
  const [guessedLetters, setGuessedLetters] = useState([])
  /*LETRAS ERRADAS */
  const [wrongLetters, setWrongLetters] = useState([])
  /*TENTATIVAS */
  let guessesQty = 3
  const [guesses, setGuesses] = useState(guessesQty)
  /*PONTUAÇÃO */
  const [score, setScore] = useState(0)

  const pickWordAndCategory = () => {
    const categories = Object.keys(words)
    const category = categories[Math.floor(Math.random() * categories.length)]
    const word = words[category][Math.floor(Math.random() * words[category].length)]

    return { word, category }
  }

  const startGame = () => {
    resetLettersState()
    const { word, category } = pickWordAndCategory()
    let wordLetters = word.split('')
    wordLetters = wordLetters.map(letter => letter.toLowerCase())

    setPicketWord(word)
    setPicketCategory(category)
    setLetters(wordLetters)


    setGameStage(stages[1].name)

  }

  const verifyLetter = (letter) => {
    const normalizedLetter = letter.toLowerCase()



    if (guessedLetters.includes(normalizedLetter) || wrongLetters.includes(normalizedLetter)) {

      alert('Essa letra já foi usada')
      return;
    }
    if (letters.includes(normalizedLetter)) {
      setGuessedLetters((actualGuessedLetter) =>
        [...actualGuessedLetter,
          normalizedLetter]
      )

    } else {
      setWrongLetters((actualWrongLetter) =>
        [...actualWrongLetter,
          normalizedLetter]
      )
      setGuesses(prevGuesses => prevGuesses - 1)
    }


  }
  //limpando os states 
  const resetLettersState = () => {
    setGuessedLetters([])
    setWrongLetters([])

  }
  //Verificando as chances restantes
  useEffect(() => {
    if (guesses <= 0) {
      resetLettersState()
      setGameStage(stages[2].name)
    }
  }, [guesses])

  //verificação de vitoria
  useEffect(() => {
    const uniqueLetters = [... new Set(letters)]

    if (uniqueLetters.length === guessedLetters.length && uniqueLetters.length > 0) {

      setScore((prevScore) => prevScore += 100)

      setGuesses(guessesQty)
      //mostrar outra palavra
      startGame()
    }

  }, [guessedLetters, letters])


  const resetGame = () => {
    setGuesses(guessesQty)
    setScore(0)
    setGameStage(stages[0].name)
  }



  return (
    <>
      <div className='App'>
        {gameStage === 'start' && <StartScreen startGame={startGame} />}
        {gameStage === 'game' && <Game verifyLetter={verifyLetter}
          picketCategory={picketCategory}
          picketWord={picketWord}
          letters={letters}
          guesses={guesses}
          guessedLetters={guessedLetters}
          wrongLetters={wrongLetters}
          score={score}
        />}
        {gameStage === 'end' && <GameOver resetGame={resetGame} score={score} />}
      </div>
    </>
  )
}

export default App
