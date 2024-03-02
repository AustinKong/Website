import Header from '../../common/section_header/Header.jsx'
import SocialMediaIcon from '../../common/social_media_icon/SocialMediaIcon.jsx'
import HoverText from '../../common/hoverable_text/HoverText.jsx'

import githubIcon from '../../../images/icons/githubWhite.svg'
import linkedinIcon from '../../../images/icons/linkedinWhite.svg'
import telegramIcon from '../../../images/icons/telegramWhite.svg'

import profilePicture from '../../../images/misc/profilePicture.jpg'

import nus from '../../../images/misc/NUS.jpg'
import programming from '../../../images/misc/programming.jpg'

import blob1 from '../../../images/blobs/blob1.svg'
import blob2 from '../../../images/blobs/blob2.svg'

import styles from './aboutStyles.module.css'

const About = ({ cursorPosition }) => {
  const socialMediaIcons = [
    { icon: githubIcon, alt:'Github', link:'https://github.com/AustinKong' },
    { icon: linkedinIcon, alt:'LinkedIn', link:'in/hoi-tec-kong-543535294' },
    { icon: telegramIcon, alt:'Telegram', link:'https://Youtube.com' },
  ]

  const background = [
    { url: blob1, scale: 30, top: 30, left: -10, rotation: -30 },
    { url: blob2, scale: 40, top: 10, left: 50, rotation: -120 },
  ]

  return (
    <section>
      <Header 
        title='Quick intro.' 
        numbering='01'
        />

      <div className={styles.columnContainer}>
        <div className={styles.columnLeft}>
          <p>
            Hi. I&apos;m Austin. 
            I&apos;m a web developer and game developer based in Singapore. 
            I&apos;m currently a year 1 student studying Information Systems in <HoverText text='National University of Singapore (NUS)' image={nus} cursorPosition={cursorPosition} />.
          </p>
          <br />
          <p>
            I&apos;ve been <HoverText text='coding for more almost a decade now' image={programming} cursorPosition={cursorPosition} />. 
            I initially started in the Scratch &quot;programming&quot; language, then moved on to working on projects in Unity.
            Over the years, I&apos;ve built many Unity games solo and in small teams.
          </p>

          <div className={styles.socialMediaLinks}>
            {socialMediaIcons.map((item, index) => (
              <SocialMediaIcon 
                key={index} 
                size='1.8' 
                icon={item.icon} 
                alt={item.alt} 
                link={item.link} 
                />
            ))}
          </div>
        </div>

        <div className={styles.columnRight}>
          <img className={styles.portrait} src={profilePicture}/>
        </div>
      </div>

      <div className='background'>
        {background.map((item, index) => (
          <img 
            key={index} 
            src={item.url}
            style={{
                position: 'absolute',
                width: `${item.scale}%`,
                top: `${item.top}%`,
                left: `${item.left}%`,
                transform: `rotate(${item.rotation}deg)`,
              }}
          />
        ))}
      </div>
    </section>
  )
}

export default About