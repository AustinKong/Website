import { useState } from 'react'
import { motion } from 'framer-motion'

import style from './index.module.css'

const Navbar = () => {
  const [active, setActive] = useState(false)

  window.addEventListener('scroll', () => {
    if (window.scrollY >= screen.availHeight * 0.9) {
      setActive(true)
    } else {
      setActive(false)
    }
  })

  return (
    <motion.nav
      className={style.navbar}
      initial={{ 
        backgroundColor: 'none',
        color: 'var(--black)'
      }}
      animate={{ 
        backgroundColor: active ? 'var(--black)' : 'var(--white)' ,
        color: active ? 'var(--white)' : 'var(--black)',
        borderColor: active ? 'var(--white)' : 'var(--black)',
      }}
      transition={{ duration: 0.3 }}
    >
      <a 
        href="#Home"
        className={style.home} 
        style={active ? { color: 'var(--white)' } : {}}
      >
        AUSTIN KONG
      </a>
      <a
        href="#About"
        className={style.link}
      >
        About
      </a>
      <a
        href="#Works"
        className={style.link}
      >
        Works
      </a>
      <a
        href="#Contact"
        className={style.link}
      >
        Let&apos;s Talk
      </a>
    </motion.nav>
  )
}

export default Navbar