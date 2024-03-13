import { motion } from 'framer-motion'
import { useState, useRef } from 'react'
import { useDispatch } from 'react-redux'

import style from './index.module.css'

import useCursorPosition from '../../../misc/useCursorPosition.js'
import LetterCell from '../LetterCell'
import { setState } from '../../common/Cursor/cursorReducer.js'

/* Where * represents an empty cell */
const GRID_MASK = [
  '*', '*', '*', '*',
  'P', 'O', 'R', 'T',
  'F', 'O', '*', '*',
  'L', 'I', 'O', '*',
]
const GRID_TEXT = [
  'H', 'E', 'L', 'O',
  'W', 'O', 'R', 'L',
  'D', 'H', 'O', 'V',
  'E', 'R', 'M', 'E'
]

const LetterGrid = () => {
  const dispatch = useDispatch()

  const [isHovered, setIsHovered] = useState()
  const { cursorX, cursorY } = useCursorPosition();
  const maskSize = isHovered ? 400 : 10
  const maskRef = useRef(null)

  const maskX = cursorX - maskSize / 2 - (maskRef.current ? maskRef.current.getBoundingClientRect().x : 0)
  const maskY = cursorY - maskSize / 2 - (maskRef.current ? maskRef.current.getBoundingClientRect().y : 0)

  return (
    <div
     className={style.container}
    >
      {/* Element to be hidden at beginning */}
      <motion.div
        ref={maskRef}
        className={style.maskContent}
        animate={{
          // If maskRef is not null, only then do we get its x and y values
          WebkitMaskPosition: `${maskX}px ${maskY}px`,
          WebkitMaskSize: `${maskSize}px`
        }}
        transition={{
          type: 'tween',
          ease: 'backOut'
        }}
        onMouseEnter={() => {
          dispatch(setState('HIDDEN'))
          setIsHovered(true)
        }}
        onMouseLeave={() => {
          dispatch(setState('DEFAULT'))
          setIsHovered(false)
        }}
      >
        {
          GRID_MASK.map((letter, index) => (
            <LetterCell
              key={index}
              character={letter === '*' ? GRID_TEXT[index] : GRID_MASK[index]}
              highlight={letter === '*' ? false : true}
            />
          ))
        }
      </motion.div>

      {/* Mask to allow for overflow */}
      <motion.div
        className={style.mask}
        animate={{
          left: `${maskX}px`,
          top: `${maskY}px`,
          width: `${maskSize}px`,
          height: `${maskSize}px`
        }}
        transition={{
          type: 'tween',
          ease: 'backOut'
        }}
      />

      {/* Element to be shown at beginning */}
      <div
        className={style.content}
      >
        {
          GRID_TEXT.map((letter, index) => (
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