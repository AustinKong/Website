import { motion } from "framer-motion"

import StackedItem from "./StackedItem.jsx"

import style from './index.module.css'

const StackedList = ({ primary, secondary, hiddenPrimary, hiddenSecondary }) => {
  return (
    <motion.ul
      className={style.stackedList}
      initial={{ transform: 'translateY(4rem)', opacity: 0 }}
      whileInView={{ transform: 'translateY(0)', opacity: 1 }}
      viewport={{ once: true }}
      transition={{ duration: 0.3, ease: 'easeOut' }}
    >
      {
        primary.map((item, index) => (
          <StackedItem
            key={index}
            primary={item}
            secondary={secondary[index]}
            hiddenPrimary={hiddenPrimary[index]}
            hiddenSecondary={hiddenSecondary[index]}
          />
        ))
      }
    </motion.ul>
  )
}

export default StackedList