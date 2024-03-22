import { motion } from 'framer-motion'

import style from './index.module.css'
import ellipse from '../../../assets/ellipse.png'

import Linkedin from './socials/Linkedin.jsx'
import Github from './socials/Github.jsx'
import Telegram from './socials/Telegram.jsx'

const CallToActionCard = () => {
  return (
    <div
      className={style.callToAction}
    >
      <img
        src={ellipse}
        className={style.ellipse}
      />
      <motion.div
        className={style.container}
        initial={{ opacity: 0, transform: 'translateY(30%)' }}
        whileInView={{ opacity: 1, transform: 'translateY(0)' }}
        transition={{ duration: 0.4, ease: 'backOut', delay: 0.2 }}
        viewport={{ once: true }}
      >
        <h3
          className={style.title}
        >
          Let&apos;s
          Talk!
        </h3>
        <a
          className={style.email}
          href='mailto:konghoitec@gmail.com'
       >
          konghoitec@gmail.com
        </a>
        <div
          className={style.socials}
        >
            <Linkedin />
            <Github />
            <Telegram />
        </div>
      </motion.div>
    </div>
  )
}

export default CallToActionCard