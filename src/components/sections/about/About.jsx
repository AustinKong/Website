import Header from '../../common/section_header/Header.jsx'
import SocialMediaIcon from '../../common/social_media_icon/SocialMediaIcon.jsx'
import styles from './aboutStyles.module.css'

import githubIcon from '../../../images/icons/githubWhite.svg'
import linkedinIcon from '../../../images/icons/linkedinWhite.svg'
import telegramIcon from '../../../images/icons/telegramWhite.svg'

import blob1 from '../../../images/blobs/blob1.svg'
import blob2 from '../../../images/blobs/blob2.svg'

const About = () => {
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
      <Header title='Let me introduce myself' numbering='01' />

      <div className={styles.columnContainer}>
        <div className={styles.columnLeft}>
          <p>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nunc facilisis risus elit, id laoreet sapien facilisis eget. Morbi consectetur diam eget dui congue dictum. Aenean id euismod neque. Cras iaculis imperdiet massa, commodo volutpat arcu. In eget odio ut felis efficitur euismod. Nulla facilisi.
          </p>
          <br />
          <p>
            Integer ut accumsan leo, et sagittis leo. Praesent vitae commodo enim, in luctus massa. Proin vitae ipsum nec nisl bibendum dapibus vel interdum nisl.
            Integer ut accumsan leo, et sagittis leo. Praesent vitae commodo enim, in luctus massa. Proin vitae ipsum nec nisl bibendum dapibus vel interdum nisl.
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
          <img className={styles.portrait} src='https://picsum.photos/250/300'/>
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