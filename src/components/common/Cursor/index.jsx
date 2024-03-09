import { useState, useEffect } from 'react'
import { motion } from 'framer-motion'

import style from './index.module.css'

const CURSOR_RADIUS = 5

const Cursor = () => {
  const [cursorState, setCursorState] = useState({ state: 'default', position: { x: 0, y: 0 }})

  const updateCursorPosition = (e) => {
    setCursorState({...cursorState, position: { x: e.clientX, y: e.clientY }})
  }

  useEffect(() => {
    window.addEventListener("mousemove", updateCursorPosition)
    return () => {
      window.removeEventListener("mousemove", updateCursorPosition)
    }
  })

  return (
    <motion.div
      className={style.cursor}
      animate={{
        left: cursorState.position.x - CURSOR_RADIUS,
        top: cursorState.position.y - CURSOR_RADIUS
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