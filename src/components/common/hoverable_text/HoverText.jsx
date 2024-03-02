import { motion } from 'framer-motion'
import { useState } from 'react'

const HoverText = ({ text, image, cursorPosition }) => {
  const [isHovered, setIsHovered] = useState(false)

  const spanStyle = {
    fontStyle: 'italic',
  }

  const imgStyle = {
    position: 'fixed',
    pointerEvents: 'none',
    zIndex: -1,
    maxWidth: '10rem'
  }

  return (
    <>
      <motion.span
        style={spanStyle}
        onHoverStart={() => setIsHovered(true)}
        onHoverEnd={() => setIsHovered(false)}
      >
        {text}
      </motion.span>

      {/* Conditionally renders image */}
      {
        isHovered && (
          <motion.img
            style={imgStyle}
            src={image}
            initial={{
              left: cursorPosition.x,
              top: cursorPosition.y
            }}
            animate={{
              left: cursorPosition.x,
              top: cursorPosition.y
            }}
            transition={{
              ease: 'easeOut'
            }}
          />
        )
      }
    </>
  )
}

export default HoverText