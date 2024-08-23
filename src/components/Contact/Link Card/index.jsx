import { useDispatch } from 'react-redux'
import { setState } from '../../common/Cursor/cursorReducer'
import { motion } from 'framer-motion'

import style from '../index.module.css'

const LinkCard = ({ title, description, link, blank = false }) => {
  const dispatch = useDispatch()

  return (
    <motion.div
      className={style.card}
      onHoverStart={() => {
        dispatch(setState('HOVER_LINK'))
      }}
      onHoverEnd={() => {
        dispatch(setState('DEFAULT'))
      }}
    >
      <a
        style={{
          textDecoration: 'none'
        }}
        href={link}
        target={blank ? 'blank' : 'self'}
      >
        <h3
          className={style.title}
        >
          {title}
        </h3>

        <p
          className={style.description}
        >
          {description}
        </p>
      </a>
    </motion.div>
  )
}

export default LinkCard