//CSS
import './App.css'

//REACT
import { useCallback, useEffect, useState } from 'react'

//DATA
import { wordsList } from "./data/words.js"

//COMPONENTS
import StartScreen from './components/StartScreen'
import GameOver from './components/GameOver'

const stages = [
  {id: 1, name: "start"},
  {id:2, name: "game"},
  {id:3, name: "end"},
]


function App() {

  const [gameStage, setGameStage] = useState(stages[0].name)
  const [words] = useState(wordsList)

  console.log(words)

  const startGame = () => {
    setGameStage(stages[1].name)
  }

  return (
    <>
      <div>
        {gameStage === 'start' && <StartScreen startGame={startGame}/>}
        {gameStage === 'game' && <Game/>}
        {gameStage === 'end' && <GameOver/>}
        
      </div>
    </>
  )
}

export default App
