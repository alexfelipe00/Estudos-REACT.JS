//CSS
import './App.css'

//REACT
import { useCallback, useEffect, useState } from 'react'

//DATA
import { wordsList } from "./data/words.js"

//COMPONENTS
import StartScreen from './components/StartScreen'
import Game from './components/Game.jsx'
import GameOver from './components/GameOver'

const stages = [
  {id: 1, name: "start"}, //  tela  0
  {id: 2, name: "game"}, //   tela  1
  {id: 3, name: "end"}, //    tela  2
]


function App() {

  const [gameStage, setGameStage] = useState(stages[0].name)
  const [words] = useState(wordsList)

  const [pickedWord, setPickedWord] = useState("")
  const [pickedCategory, setPickedCategory] = useState("")
  const [letters, setLetters] = useState([])

  const [guessedLetters, setGuessedLetters] = useState([])
  const [wrongLetters, setWrongLetters] = useState([])
  const [guesses, setGuesses] = useState(3)
  const [score, setScore] = useState(0)

  const pickWordAndPickCategory = () => {
    // pick a random category
    const categories = Object.keys(words)
    //Obtem um item aleatorio do objeto através de seu indice
    const category = categories[Math.floor(Math.random() * Object.keys(categories).length)]

    // pick a random word
    const word = words[category][Math.floor(Math.random() * words[category].length)]    

    return {word, category}
  }

  // starts the secret words game
  const startGame = () => {
    // pick word and pick category
    const {word, category} = pickWordAndPickCategory()

    // create an array of letters
    let wordLetters = word.split("")

    wordLetters = wordLetters.map((l) => l.toLowerCase())

    // fill states
    setPickedWord(word)
    setPickedCategory(category)
    setLetters(wordLetters)



    setGameStage(stages[1].name)
  }
  
  // process the letter input
  const verifyLetter = (letter) =>{
    
    const normalizedLetter = letter.toLowerCase()

    // check if letter has already been utilized
    if(guessedLetters.includes(normalizedLetter) || wrongLetters.includes(normalizedLetter)){
      return
    }

    // push guessed letter or remove a guess
    if(letters.includes(normalizedLetter)){
      setGuessedLetters((actualGuessedLetters) =>[
        ...actualGuessedLetters, 
        normalizedLetter
      ])
    }else{
      setWrongLetters((actualWrongLetters) =>[
        ...actualWrongLetters, 
        normalizedLetter
      ])

      setGuesses((actualGuesses) => actualGuesses - 1)
    }
  }

  const clearLetterStates = () =>{
    setGuessedLetters([])
    setWrongLetters([])
  }

  useEffect(() =>{
    if(guesses <= 0){
      // reset all states
      setGameStage(stages[2].name)

      clearLetterStates()
    }
  }, [guesses])

  const retry = () =>{
    setGameStage(stages[0].name)
  }

  return (
    <>
 <div className="App">
      {gameStage === "start" && <StartScreen startGame={startGame} />}
      {gameStage === "game" && (
        <Game
          verifyLetter={verifyLetter}
          pickedWord={pickedWord}
          pickedCategory={pickedCategory}
          letters={letters}
          guessedLetters={guessedLetters}
          wrongLetters={wrongLetters}
          guesses={guesses} 
          score={score}
        />
      )}
      {gameStage === "end" && <GameOver retry={retry} score={score} />}
    </div>
    </>
  )
}

export default App
