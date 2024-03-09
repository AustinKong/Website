import { useState, useEffect } from 'react'
import { motion } from 'framer-motion'

import style from './index.module.css'

const CURSOR_RADIUS = 5

const Cursor = () => {
  const [cursorPosition, setCursorPosition] = useState({ x: 0, y: 0})

  const updateCursorPosition = (e) => {
    setCursorPosition({ x: e.clientX, y: e.clientY })
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
        left: cursorPosition.x - CURSOR_RADIUS,
        top: cursorPosition.y - CURSOR_RADIUS
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