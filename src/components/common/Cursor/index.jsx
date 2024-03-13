import { useSelector } from 'react-redux'
import { motion } from 'framer-motion'

import useCursorPosition from '../../../misc/useCursorPosition.js'
import style from './index.module.css'

const Cursor = () => {
  const cursorState = useSelector(state => state.cursor)
  const { cursorX, cursorY } = useCursorPosition()

  let cursorRadius

  switch (cursorState) {
    case 'HOVER_LINK':
      cursorRadius = 30
      break
    case 'HIDDEN':
      cursorRadius = 0
      break
    case 'DEFAULT':
    default:
      cursorRadius = 5
      break
  }

  return (
    <motion.div
      className={style.cursor}
      animate={{
        left: cursorX - cursorRadius,
        top: cursorY - cursorRadius,
        width: cursorRadius * 2,
        height: cursorRadius * 2
      }}
      transition={{ 
        type: 'tween', 
        ease: 'backOut' 
      }}
    >

      {/* Cursor states 🖱️ */}

      {
        cursorState === 'DEFAULT' && (
          <div
            className={style.default}
          />
        )
      }

      {
        cursorState === 'HOVER_LINK' && (
          <div
            className={style.link}
          >
            <svg
              viewBox="0 0 12 12"
              width={cursorRadius * 0.7}
              height={cursorRadius * 0.7}
            >
              <path
                d="M0.292893 10.2929C-0.0976311 10.6834 -0.0976311 11.3166 0.292893 11.7071C0.683418 12.0976 1.31658 12.0976 1.70711 11.7071L0.292893 10.2929ZM12 0.999999C12 0.447714 11.5523 -1.3919e-06 11 -1.36862e-06L2 -9.893e-07C1.44772 -9.66022e-07 1 0.447714 1 0.999999C1 1.55228 1.44772 2 2 2L10 2L10 10C10 10.5523 10.4477 11 11 11C11.5523 11 12 10.5523 12 10L12 0.999999ZM1.70711 11.7071L11.7071 1.70711L10.2929 0.292892L0.292893 10.2929L1.70711 11.7071Z"
                fill="var(--black)"
              />
            </svg>
          </div>
        )
      }

    </motion.div>
  )
}

export default Cursor