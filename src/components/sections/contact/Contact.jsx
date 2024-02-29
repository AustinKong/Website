import LetterGrid from '../../common/letter_grid/LetterGrid.jsx';
import styles from './contactStyles.module.css'

const fixedLetters = [
  { character: 'G', location: 2},
  { character: 'E', location: 3},
  { character: 'T', location: 4},
  { character: 'I', location: 6},
  { character: 'N', location: 7},
  { character: 'T', location: 11},
  { character: 'O', location: 12},
  { character: 'U', location: 13},
  { character: 'C', location: 14},
  { character: 'H', location: 15},
  { character: '#Github', location: 21},
  { character: '#Linkedin', location: 22},
  { character: '#Telegram', location: 23},
]

const Contact = () => {
  return (
    <section className={styles.contact}>
      <LetterGrid fixedLetters={fixedLetters} />
      <footer className={styles.footer}>
        © Austin Kong 2024
      </footer>
    </section>
  )
}

export default Contact;