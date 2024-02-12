import Letter from './Letter.jsx'

import './letterGridStyles.css'

const GRID_ROWS = 7
const GRID_COLS = 8

// Expect message to be an array of { character: 'A', location: 13 } object
// Top left is location 0, going to the right adds 1, going down adds 8
// TBD what to do with telegram etc icons as they are not letters
const LetterGrid = ({ fixedLetters }) => {
  return (
    <div className='letter-grid'>
      {
        letterComponents(fixedLetters)
      }
    </div>
  )
}

const letterComponents = (fixedLetters) => {
  let fixedLetterIndex = 0
  const outputLetterComponents = []

  for (let row = 0; row < GRID_ROWS; row++) {
    for (let col = 0; col < GRID_COLS; col++) {
      const location = row * 8 + col

      if (isInFixedLetters(fixedLetters, location)) {
        outputLetterComponents.push(
          <Letter 
            character={fixedLetters[fixedLetterIndex].character}
            isHighlighted={true}
            key={location}
          />
        )
        fixedLetterIndex++
      } else {
        outputLetterComponents.push(
          <Letter
            character={randomCharacter()}
            isHighlighted={false}
            key={location}
          />
        )
      }
    }
  }


  return outputLetterComponents
}

const isInFixedLetters = (fixedLetters, location) => {
  for (let i = 0; i < fixedLetters.length; i++) {
    if (fixedLetters[i].location == location) {
      return true
    }
  }
  return false
}

const randomCharacter = () => {
  const characters = 'ABCDEFGHIJKLMNOPQRSTUVWXYZ'
  const randomIndex = Math.floor(Math.random() * characters.length)
  return characters[randomIndex]
}

export default LetterGrid