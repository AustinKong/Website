import { motion } from 'framer-motion'
import { useState } from 'react'

import githubIcon from '../../../images/icons/githubBlack.svg'
import linkedinIcon from '../../../images/icons/linkedinBlack.svg'
import telegramIcon from '../../../images/icons/telegramBlack.svg'

import SocialMediaIcon from '../social_media_icon/SocialMediaIcon.jsx'
import styles from './letterGridStyles.module.css'

const CHARACTERS = 'ABCDEFGHIJKLMNOPQRSTUVWXYZ'
const randomCharacter = () => {
  const randomIndex = Math.floor(Math.random() * CHARACTERS.length)
  return CHARACTERS[randomIndex]
}

const Letter = ({ character, isHighlighted }) => {
  const [isHovered, setIsHovered] = useState(false)

  if (character[0] == '#') {
    let iconData = {
      icon: null,
      alt: null,
      link: null
    }
    switch (character) {
      case '#Github':
        iconData.icon = githubIcon
        iconData.alt = 'Github'
        iconData.link = 'https://github.com/AustinKong'
        break
      case '#Linkedin':
        iconData.icon = linkedinIcon 
        iconData.alt = 'Linkedin'
        iconData.link = 'in/hoi-tec-kong-543535294'
        break
      case '#Telegram':
        iconData.icon = telegramIcon
        iconData.alt = 'Telegram'
        iconData.link = 'https://github.com/AustinKong'
        break
    }
    return (
      <div className={styles.gridContainer}>
        <SocialMediaIcon size='2.5' icon={iconData.icon} alt={iconData.alt} link={iconData.link} />
      </div>
    ) 
  }

  if (isHighlighted) {
    return (
      <div className={styles.gridContainer}>
        <span className={styles.highlighted}>
          {character}
        </span>
      </div>
    )
  }

  return (
    <motion.div 
      className={styles.gridContainer}
      onHoverStart={() => {
        setIsHovered(true)
      }}
      onHoverEnd={() => {
        setIsHovered(false)
      }}
      initial={{ transform: 'scale(1)' }}
      animate={{ transform: `scale(${ isHovered ? 2 : 1 })`}}
      >
      <span className={styles.letter}>
        {randomCharacter()}
      </span>
    </motion.div>
  )
}

export default Letter