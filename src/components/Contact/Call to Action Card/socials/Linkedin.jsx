import { useDispatch } from 'react-redux'
import { useState } from 'react'
import { motion } from 'framer-motion'

import style from '../index.module.css'
import { setState } from '../../../common/Cursor/cursorReducer'

const Linkedin = () => {
  const dispatch = useDispatch()
  const [isHovered, setIsHovered] = useState(false)

  return (
    <motion.a
      href='https://www.linkedin.com/in/hoi-tec-kong-543535294/'
      target='_blank'
      className={style.social}
      initial={{
        transform: 'scale(1)'
      }}
      animate={{
        transform: `${isHovered ? 'scale(1.2)' : 'scale(1)'}`
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
        viewBox="0 0 24 24"
      >
        <path
          d="M19 0h-14c-2.761 0-5 2.239-5 5v14c0 2.761 2.239 5 5 5h14c2.762 0 5-2.239 5-5v-14c0-2.761-2.238-5-5-5zm-11 19h-3v-11h3v11zm-1.5-12.268c-.966 0-1.75-.79-1.75-1.764s.784-1.764 1.75-1.764 1.75.79 1.75 1.764-.783 1.764-1.75 1.764zm13.5 12.268h-3v-5.604c0-3.368-4-3.113-4 0v5.604h-3v-11h3v1.765c1.396-2.586 7-2.777 7 2.476v6.759z"
          fill='var(--white)'
        />
      </svg>
    </motion.a>
  )
}

export default Linkedin