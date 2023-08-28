// Keyboard Button Styles
import styles from './styles/Keyboard.module.css'

// Array of all letter as Keys
import keys from './helpers/keys'

const Keyboard = () => {
  return (
    <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(75px, 1fr))', gap: '.5rem' }}>
      {keys.map((key) => (
        <button
          className={`${styles.btn}`}
          key={key}
        >
          {key}
        </button>
      ))}
    </div>
  )
}

export default Keyboard
