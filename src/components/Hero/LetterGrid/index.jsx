import style from './index.module.css'

import LetterCell from '../LetterCell'

/* Where * represents an empty cell */
const GRID_TEXT = [
  '*', '*', '*', '*',
  'P', 'O', 'R', 'T',
  'F', 'O', '*', '*',
  'L', 'I', 'O', '*',
]
const GRID_SIZE = 4

function randomLetter() {
  const alphabet = 'ABCDEFGHIJKLMNOPQRSTUVWXYZ';
  const randomIndex = Math.floor(Math.random() * alphabet.length);
  return alphabet[randomIndex];
}

const LetterGrid = () => {
  /* Generate array of random letters */
  const randomLetters = []
  for (let i = 0; i < GRID_SIZE * GRID_SIZE; i++) {
    randomLetters.push(randomLetter())
  }

  return (
    <div
     className={style.container}
    >
      some test text
      {/* Element to be hidden at beginning */}
      <div
        className={style.mask}
      >
        {
          GRID_TEXT.map((letter, index) => (
            <LetterCell
              key={index}
              character={letter === '*' ? randomLetters[index] : GRID_TEXT[index]}
              highlight={letter === '*' ? false : true}
            />
          ))
        }
      </div>

      {/* Element to be shown at beginning */}
      <div
        className={style.content}
      >
        {
          randomLetters.map((letter, index) => (
            <LetterCell 
              key={index}
              character={letter}
              highlight={false}
            />
          ))
        }
      </div>
    </div>
  )
}

export default LetterGrid