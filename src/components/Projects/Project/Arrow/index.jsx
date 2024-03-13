import { useDispatch } from 'react-redux'
import { useState } from 'react'
import { motion } from 'framer-motion'

import style from './index.module.css'
import { setState } from '../../../common/Cursor/cursorReducer'

const Arrow = ({ link }) => {
  const dispatch = useDispatch()
  const [isHovered, setIsHovered] = useState(false)

  return (
    <motion.a
      className={style.arrow}
      href={link}
      initial={{
        transform: 'scale(1)'
      }}
      animate={{
        transform: `${isHovered ? 'scale(1.3)' : 'scale(1)'}`
      }}
      onHoverStart={() => {
        dispatch(setState('HIDDEN'))
        setIsHovered(true)
      }}
      onHoverEnd={() => {
        dispatch(setState('DEFAULT'))
        setIsHovered(false)
      }}
    >
      <svg
        viewBox='0 0 19 16'
      >
        <path
          d="M18.2083 8.93343C18.5988 8.5429 18.5988 7.90974 18.2083 7.51921L11.8443 1.15525C11.4538 0.764726 10.8206 0.764726 10.4301 1.15525C10.0396 1.54577 10.0396 2.17894 10.4301 2.56946L16.087 8.22632L10.4301 13.8832C10.0396 14.2737 10.0396 14.9069 10.4301 15.2974C10.8206 15.6879 11.4538 15.6879 11.8443 15.2974L18.2083 8.93343ZM0.850586 9.22632L17.5012 9.22632V7.22632L0.850586 7.22632L0.850586 9.22632Z"
          fill="var(--black)"
        />
      </svg>
    </motion.a>
  )
}

export default Arrow