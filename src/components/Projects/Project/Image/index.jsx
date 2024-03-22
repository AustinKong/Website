import { useDispatch } from 'react-redux'
import { useState } from 'react'
import { setState } from '../../../common/Cursor/cursorReducer.js'
import { motion } from 'framer-motion'

const Image = ({ image, link }) => {
  const dispatch = useDispatch()
  const [isHovered, setIsHovered] = useState(false)

  const style = {
    margin: '2rem 0',
    width: '100%',
    overflow: 'hidden',
    display: 'inline-block',
    height: 'fit-content'
  }

  return (
    <motion.a
      href={link}
      target='_blank'
      style={style}
      initial={{
        borderRadius: '5px'
      }}
      animate={{
        borderRadius: `${isHovered ? '30px' : '5px'}`,
      }}
      onHoverStart={() => {
        dispatch(setState('HOVER_LINK'))
        setIsHovered(true)
      }}
      onHoverEnd={() => {
        dispatch(setState('DEFAULT'))
        setIsHovered(false)
      }}
      transition={{
        duration: '0.2',
        ease: 'easeOut'
      }}
    >
      <motion.img
        src={image}
        style={{ width: '100%' }}
        initial={{
          transform: 'scale(1)'
        }}
        animate={{
          transform: `${isHovered ? 'scale(1.01)' : 'scale(1)'}`
        }}
        transition={{
          duration: '0.5',
          ease: 'easeOut'
        }}
      />
    </motion.a>
  )
}

export default Image