import style from './index.module.css'

import ArrowLeft from '../common/arrows/ArrowLeft.jsx'
import ArrowRight from '../common/arrows/ArrowRight.jsx'

import pfp from '../../assets/images/Profile Picture.jpg'
import StackedList from './Stacked List/index.jsx'

const EXPERIENCE = {
  primary: ['National University of Singapore', 'Pin Hwa High School'],
  secondary: ['Aug 2023 - Present', 'Feb 2023 - May 2023'],
  hiddenPrimary: ['Computing Student', 'IT Support Technician'],
  hiddenSecondary: ['Fixing bugs', 'Replacing HDMI cables']
}

const SKILLS = {
  primary: ['Full Stack Development', 'Game Development', 'Software Development'],
  secondary: ['UI/UX Design, Frontend, Backend', 'Programming, Graphics, Animation', 'Designing, Testing, Deploying'],
  hiddenPrimary: ['React, Express, MongoDB', 'Unity, C#, Aseprite', 'Electron, NodeJS, React'],
  hiddenSecondary: ['5+ websites built', '10+ games made', '1 Electron project']
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
          I strive to craft captivating digital experiences that users won&apos;t forget.
        </p>
        <img 
          src={pfp}
        />
      </div>

      <div className={style.intro}>
        <p>
          Hi, I am Austin, a developer based in Singapore. I am a computing student (major in Information Systems, minor in Communications and New Media) at the National University of Singapore (NUS).
          <br /><br />
          In my free time, I like building websites, video games and software projects (like this one!). I believe that coding should be used to create meaningful and fun experiences for people to enjoy, not just to solve problems!
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