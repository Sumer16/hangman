type GuessWordProps = {
  word: string,
  guessedLetters: string[],
  reveal: boolean
}

const GuessWord = () => {
  const word = 'test'
  const guessedLetters = ['t', 'e', 's', 't']
  const reveal = false

  return (
    <div style={{ display: 'flex', gap: '0.25em', fontSize: '6rem', fontWeight: 'bold', textTransform: 'uppercase', fontFamily: 'monospace' }}>
      { word.split("").map((letter, index) => (
        <span style={{ borderBottom: '0.1em black solid'}} key={index}>
          <span style={{ visibility: guessedLetters.includes(letter) ? 'visible' : 'hidden', }}>{letter}</span>
        </span>
      ))}
    </div>
  )
}

export default GuessWord
