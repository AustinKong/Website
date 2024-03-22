import { motion } from 'framer-motion'

import style from './index.module.css'

import ArrowLeft from '../common/arrows/ArrowLeft.jsx'
import ArrowRight from '../common/arrows/ArrowRight.jsx'

import pfp from '../../assets/images/Profile Picture.jpg'
import StackedList from './Stacked List/index.jsx'

const EXPERIENCE = {
  primary: ['National University of Singapore', 'Pin Hwa High School'],
  secondary: ['Jan 2024', 'Feb 2024'],
  hiddenPrimary: ['Stonks', 'Bonks'],
  hiddenSecondary: ['Sla', 'Vakia']
}

const SKILLS = {
  primary: ['National University of Singapore', 'Pin Hwa High School'],
  secondary: ['Jan 2024', 'Feb 2024'],
  hiddenPrimary: ['Stonks', 'Bonks'],
  hiddenSecondary: ['Sla', 'Vakia']
}

const About = () => {
  return (
    <section 
      className={style.about}
      id="About"
      >
      <header
      >
        <ArrowRight 
          text={`GET TO \nKNOW ME`}
        />
        <h2>
          ABOUT ME
        </h2>
      </header>

      <div className={style.quote}>
        <p>
          I don&apos;t just create websites, I create experiences.
        </p>
        <img 
          src={pfp}
        />
      </div>

      <div className={style.intro}>
        <p>
          Welcome to my corner of the internet! I'm [Your Name], a [Your Profession or Passion] based in [Your Location]. Here, you'll find a blend of my experiences, expertise, and musings on [Your Interests or Specializations].
          <br /><br />
          My name is Ochuko Pedro and I am a Software Engineer. I do fullstack development but I love building interactive user experiences on the web. I am a JavaScript and TypeScript advocate and a lover of CSS. I have recently taken a likin
        </p>
        <ArrowLeft
          text='BIO'
        />
      </div>

      <div className={style.experience}>
        <StackedList
          primary={EXPERIENCE.primary}
          secondary={EXPERIENCE.secondary}
          hiddenPrimary={EXPERIENCE.hiddenPrimary}
          hiddenSecondary={EXPERIENCE.hiddenSecondary}
        />
        <ArrowLeft
          text={`EXPE\nRIENCE`}
        />
      </div>

      <div className={style.skills}>
        <StackedList
          primary={SKILLS.primary}
          secondary={SKILLS.secondary}
          hiddenPrimary={SKILLS.hiddenPrimary}
          hiddenSecondary={SKILLS.hiddenSecondary}
        />
        <ArrowLeft
          text='SKILLS'
        />
      </div>
    </section>
  )
}

export default About