import { motion } from 'framer-motion'
import { useState } from 'react'

import style from './skillStyles.module.css'

const Skill = ({ title, list, index }) => {
  const [isHovered, setIsHovered] = useState(false)

  return (
    <motion.div 
      className={style.container}
      onHoverStart={ () => { setIsHovered(true) } }
      onHoverEnd={ () => { setIsHovered(false) } }
      >
      <div className={style.containerLeft}>
        <small>
          {`${index}.`}
        </small>
      </div>
      <div className={style.containerRight}>
        <div className={style.titleContainer}>
          <motion.h4 
            className={style.h4}
            initial={{ top: 0 }}
            animate={{ top: `${ isHovered ? '1.518rem' : '0'}`}}
            >
            {title}
          </motion.h4>
          <motion.h4 
            className={style.h4}
            initial={{ top: `-1.518rem` }}
            animate={{ top: `${ isHovered ? '0' : '-1.518rem'}`}}
            >
            {title}
          </motion.h4>
        </div>
        <ul>
          {
            list.map((item, index) => (
              <li key={index} className={style.li}>
                {item}
              </li>
            ))
          }
        </ul>
      </div>
    </motion.div>
  )
}

export default Skill