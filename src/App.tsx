//  Library packages
import { useState } from 'react'

// JSON data
import wordList from './helpers/wordList.json'

// Components
import GuessWord from './GuessWord'
import Keyboard from './Keyboard'
import Drawing from './Drawing'

function App() {
  const [wordGuess, setWordGuess] = useState(() => {
    return wordList[Math.floor(Math.random() * wordList.length)]
  })

  const [guessLetters, setGuessLetters] = useState<string[]>([])

  const incorrectLetters = guessLetters.filter(letter => !wordGuess.includes(letter))

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

      <Drawing numberGuesses={incorrectLetters.length} />
      <GuessWord guessLetters={guessLetters} wordGuess={wordGuess} />
      <div style={{ alignSelf: 'stretch' }}>
        <Keyboard />
      </div>
    </div>
  )
}

export default App
