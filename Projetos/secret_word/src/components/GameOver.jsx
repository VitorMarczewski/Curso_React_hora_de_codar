import React from 'react'

const GameOver = ({resetGame,score}) => {
  return (
    <div>
      <h1>Fim de Jogo</h1>
      <h2>A sua pontuação foi : <span>{score}</span></h2>
      <button onClick={resetGame}>REINICIAR GAME</button>
    </div>
  )
}

export default GameOver