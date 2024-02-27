import LetterGrid from "../../common/letter_grid/LetterGrid.jsx";
import styles from './heroStyles.module.css'

const fixedLetters = [
  { character: '2', location: 4},
  { character: '0', location: 5},
  { character: '2', location: 6},
  { character: '4', location: 7},
  { character: 'A', location: 40},
  { character: 'U', location: 41},
  { character: 'S', location: 42},
  { character: 'T', location: 43},
  { character: 'I', location: 44},
  { character: 'N', location: 45},
  { character: 'K', location: 48},
  { character: 'O', location: 49},
  { character: 'N', location: 50},
  { character: 'G', location: 51},
]

const Hero = () => {
  return (
    <section className={styles.hero}>
      <LetterGrid fixedLetters={fixedLetters}/>
    </section>
  )
}

export default Hero