import { useState } from 'react'

import Letter from './Letter.jsx'
import styles from './letterGridStyles.module.css'

const GRID_ROWS = 7
const GRID_COLS = 8
const CHARACTERS = 'ABCDEFGHIJKLMNOPQRSTUVWXYZ'

// Generic functions
const randomCharacter = () => {
  const randomIndex = Math.floor(Math.random() * CHARACTERS.length)
  return CHARACTERS[randomIndex]
}

// TODO: Change to expect String "*******AUSTIN***KONG"... where '*' denotes any random character
// Where custom icons can be denoted by something like '~Tele', that is four characters following a tilda
// Create a custom parser to do this.


// Expect message to be an array of { character: 'A', location: 13 } object
// Top left is location 0, going to the right adds 1, going down adds 8
// TBD what to do with telegram etc icons as they are not letters
const LetterGrid = ({ fixedLetters }) => {
  const [interval, setInterval] = useState(0)

  const letterComponents = (fixedLetters) => {
    let fixedLetterIndex = 0
    const outputLetterComponents = []

    for (let row = 0; row < GRID_ROWS; row++) {
      for (let col = 0; col < GRID_COLS; col++) {
        const location = row * 8 + col

        if (location <= interval) {
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
    }

    if (interval < GRID_COLS * GRID_ROWS) {
      delayedUpdate()
    }
    return outputLetterComponents
  }

  const delayedUpdate = async () => {
    await timeout(20)
    setInterval(interval + 1)
  }

  const isInFixedLetters = (fixedLetters, location) => {
    for (let i = 0; i < fixedLetters.length; i++) {
      if (fixedLetters[i].location == location) {
        return true
      }
    }
    return false
  }


  function timeout(delay) {
      return new Promise( res => setTimeout(res, delay) );
  }

  return (
    <div className={styles.letterGrid}>
      {
        letterComponents(fixedLetters)
      }
    </div>
  )
}

export default LetterGrid