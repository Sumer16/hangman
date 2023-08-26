//  Library packages
import { useState } from 'react'

// JSON data
import wordList from './wordList.json'

// Components
import GuessWord from './GuessWord'
import Keyboard from './Keyboard'
import Drawing from './Drawing'

function App() {
  const [wordGuess, setWordGuess] = useState(() => {
    return wordList[Math.floor(Math.random() * wordList.length)]
  })

  const [guessLetters, setGuessLetters] = useState<string[]>([])

  return (
    <div style={{
      maxWidth: '800px',
      display: 'flex',
      flexDirection: 'column',
      gap: '2rem',
      margin: '0 auto',
      alignItems: 'center'
    }}>
      <div style={{
        fontSize: '2rem',
        textAlign: 'center'
      }}>
        Win or Lose
      </div>
      
      <Drawing />
      <GuessWord />
      <Keyboard />
    </div>
  )
}

export default App
