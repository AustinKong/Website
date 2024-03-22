import { motion } from 'framer-motion'
import { useState, useRef } from 'react'
import { useDispatch } from 'react-redux'
import { useMediaQuery } from 'react-responsive'

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
  const isDesktop = useMediaQuery({ minWidth: 992 })
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
      {/* Hide for non desktop */}
      {
        isDesktop && (
          <>
            {/* Element to be hidden at beginning */}
            <motion.div
              ref={maskRef}
              className={style.maskContent}
              animate={{
                // If maskRef is not null, only then do we get its x and y values
                WebkitMaskPosition: `${maskX}px ${maskY}px`,
                WebkitMaskSize: `${maskSize}px`,
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

            {/* Element to be shown at beginning */}
            <div
              className={style.content}
            >
              {
                GRID_TEXT.map((letter, index) => (
                  <motion.div
                    key={index}

                    initial={{ opacity: 0, transform: 'translateY(30%)' }}
                    animate={{ opacity: 1, transform: 'translateY(0)' }}
                    transition={{ duration: 0.3, delay: Math.max(0.3, Math.random()) * 0.4, ease: 'backOut' }}
                  >
                    <LetterCell
                      character={letter}
                      highlight={false}
                    />
                  </motion.div>
                ))
              }
            </div>
          </>
        )
      }

      {/* Hide for desktop */}
      {
        !isDesktop && (
          <>
            {/* Element to be shown for non-interactive devices */}
            <div
              className={style.backup}
            >
              {
                GRID_MASK.map((letter, index) => (
                  <motion.div
                    key={index}
                    initial={{ opacity: 0, transform: 'translateY(30%)' }}
                    animate={{ opacity: 1, transform: 'translateY(0)' }}
                    transition={{ duration: 0.3, delay: Math.max(0.3, Math.random()) * 0.4, ease: 'backOut' }}
                  >
                    <LetterCell
                      key={index}
                      character={letter === '*' ? GRID_TEXT[index] : GRID_MASK[index]}
                      highlight={letter === '*' ? false : true}
                    />
                  </motion.div>
                ))
              }
            </div>
          </>
        )
      }
    </div>
  )
}

export default LetterGrid