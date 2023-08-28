type GuessWordProps = {
  wordGuess: string,
  guessLetters: string[],
  reveal?: boolean
}

const GuessWord = ({ guessLetters, wordGuess, reveal = false }: GuessWordProps) => {
  return (
    <div style={{ display: 'flex', gap: '0.25em', fontSize: '6rem', fontWeight: 'bold', textTransform: 'uppercase', fontFamily: 'monospace' }}>
      { wordGuess.split("").map((letter, index) => (
        <span style={{ borderBottom: '0.1em black solid'}} key={index}>
          <span style={{ 
              visibility: guessLetters.includes(letter) || reveal ? 'visible' : 'hidden', 
              color: !guessLetters.includes(letter) && reveal ? 'red' : 'black',
            }}
          >
            {letter}
          </span>
        </span>
      ))}
    </div>
  )
}

export default GuessWord
