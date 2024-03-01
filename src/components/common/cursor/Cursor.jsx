import { useState, useEffect } from 'react';
import { motion } from 'framer-motion';

import style from './cursorStyles.module.css'

const Cursor = ({ cursorState }) => {
  const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 });
  const mouseScale = cursorState === 'project_over' ? 7 : 1 

  const updateMousePosition = (e) => {
    setMousePosition({ x: e.clientX, y: e.clientY })
  }

  useEffect(() => {
    window.addEventListener("mousemove", updateMousePosition)
    return () => {
      window.removeEventListener("mousemove", updateMousePosition)
    }
  })

  return (
    <motion.div 
      className={style.cursor} 
      initial={{
        scale: 1
      }}
      animate={{ 
        left: mousePosition.x - 5, 
        top: mousePosition.y - 5,
        scale: mouseScale
      }}
      transition={{ type: 'tween', ease: 'backOut' }}
      >
      {
        cursorState == 'default' && (
          <div className={style.defaultCursor} />
        )
      }
      {
        cursorState == 'project_over' && (
          <div className={style.projectOverCursor}>
            <svg viewBox='0 0 11 12'>
              <path d="M0.292893 9.29289C-0.0976311 9.68342 -0.0976311 10.3166 0.292893 10.7071C0.683418 11.0976 1.31658 11.0976 1.70711 10.7071L0.292893 9.29289ZM11 1C11 0.447715 10.5523 -9.62973e-08 10 -9.62973e-08H1C0.447716 -9.62973e-08 2.84554e-07 0.447715 2.84554e-07 1C2.84554e-07 1.55228 0.447716 2 1 2H9V10C9 10.5523 9.44772 11 10 11C10.5523 11 11 10.5523 11 10V1ZM1.70711 10.7071L10.7071 1.70711L9.29289 0.292893L0.292893 9.29289L1.70711 10.7071Z" />
            </svg>
          </div>
        )
      }
    </motion.div>
  )
};

export default Cursor;