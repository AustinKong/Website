import { useSelector } from 'react-redux'
import { motion } from 'framer-motion'

import useCursorPosition from '../../../misc/useCursorPosition.js'
import style from './index.module.css'

const Cursor = () => {
  const cursorState = useSelector(state => state.cursor)
  const cursorRadius = cursorState === 'DEFAULT' ? 5 : 0
  const { cursorX, cursorY } = useCursorPosition()

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
      <div
        className={style.default}
      />

    </motion.div>
  )
}

export default Cursor