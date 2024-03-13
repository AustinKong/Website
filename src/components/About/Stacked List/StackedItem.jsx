import { motion } from 'framer-motion'
import { useState } from 'react'

import style from './index.module.css'

const StackedItem = ({ primary, secondary, hiddenPrimary, hiddenSecondary }) => {
  const [isHovered, setIsHovered] = useState(false)
  
  return (
    <motion.li
      className={style.stackedItem}
      onHoverStart={ () => setIsHovered(true) }
      onHoverEnd={ () => setIsHovered(false) }
    >
      {/* Shown at start */}
      <motion.div
        className={style.shown}
        initial={{
          transform: 'translateY(0)'
        }}
        animate={{
          transform: `${ isHovered ? 'translateY(-100%)' : 'translateY(0)'}`
        }}
      >
        <h3
          className={style.primary}
        >
          {primary}
        </h3>
        <p
          className={style.secondary}
        >
          {secondary}
        </p>
      </motion.div>

      {/* Hidden at start */}
      <motion.div
        className={style.hidden}
        initial={{
          transform: 'translateY(0)'
        }}
        animate={{
          transform: `${ isHovered ? 'translateY(-100%)' : 'translateY(0)'}`
        }}
      >
        <h3
          className={style.primary}
        >
          {hiddenPrimary}
        </h3>
        <p
          className={style.secondary}
        >
          {hiddenSecondary}
        </p>
      </motion.div>
    </motion.li>
  )
}

export default StackedItem