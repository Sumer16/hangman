//  Library packages
import { useEffect, useCallback, useState } from 'react'

// JSON data
import wordList from './helpers/wordList.json'

// Components
import GuessWord from './GuessWord'
import Keyboard from './Keyboard'
import Drawing from './Drawing'

const getWord = () => {
  return wordList[Math.floor(Math.random() * wordList.length)]
}

function App() {
  const [wordGuess, setWordGuess] = useState(getWord)

  const [guessLetters, setGuessLetters] = useState<string[]>([])

  const incorrectLetters = guessLetters.filter(letter => !wordGuess.includes(letter))

  const isLoser = incorrectLetters.length >= 6

  const isWinner = wordGuess
    .split("")
    .every(letter => guessLetters.includes(letter))

  const addGuessedLetter = useCallback(
    (letter: string) => {
      if (guessLetters.includes(letter) || isLoser || isWinner) return

      setGuessLetters(currentLetters => [...currentLetters, letter])
    },
    [guessLetters, isWinner, isLoser]
  )

  // Checks if we pressed any letter from a-z
  useEffect(() => {
    const handler = (e: KeyboardEvent) => {
      const key = e.key

      if (!key.match(/^[a-z]$/)) return

      e.preventDefault()
      addGuessedLetter(key)
    }

    document.addEventListener("keypress", handler)

    return () => {
      document.removeEventListener("keypress", handler)
    }
  }, [guessLetters])

  useEffect(() => {
    const handler = (e: KeyboardEvent) => {
      const key = e.key
      if (key !== "Enter") return

      e.preventDefault()
      setGuessLetters([])
      setWordGuess(getWord())
    }

    document.addEventListener("keypress", handler)

    return () => {
      document.removeEventListener("keypress", handler)
    }
  }, [])

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
        {isWinner ? 'Winner Winner, Chicken Dinner! - Refresh to try again.' 
          : isLoser ? `Nice try, the word is ${wordGuess}! Refresh to try again.` 
          : 'Hangman - Guess the Word'}
      </div>

      <Drawing numberGuesses={incorrectLetters.length} />
      <GuessWord reveal={isLoser} guessLetters={guessLetters} wordGuess={wordGuess} />
      <div style={{ alignSelf: 'stretch' }}>
        <Keyboard 
          activeLetters={guessLetters.filter(letter => wordGuess.includes(letter))} 
          inactiveLetters={incorrectLetters} 
          addGuessedLetter={addGuessedLetter} 
        />
      </div>
    </div>
  )
}

export default App
