import { motion } from 'framer-motion'

import LetterGrid from './LetterGrid'
import style from './index.module.css'

const Hero = () => {
  return (
    <section
      className={style.hero}
      id="Home"
    >
      <div
        className={style.container}
      >
        <LetterGrid />
        <div
          className={style.title}
        >
          <motion.h1
            initial={{ opacity: 0, transform: 'translateY(50%)' }}
            animate={{ opacity: 1, transform: 'translateY(0)' }}
            transition={{ duration: 0.4, ease: 'backOut' }}
          >
            Austin Kong <br />
            2024
          </motion.h1>
          <motion.p
            initial={{ opacity: 0, transform: 'translateY(80%)' }}
            animate={{ opacity: 1, transform: 'translateY(0)' }}
            transition={{ duration: 0.4, ease: 'backOut', delay: 0.2 }}
          >
            Web Developer, Game Developer, <br />
            Software Engineer
          </motion.p>
        </div>

      </div>
    </section>
  )
}

export default Hero