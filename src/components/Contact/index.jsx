import { useMediaQuery } from 'react-responsive'

import ArrowRight from '../common/arrows/ArrowRight.jsx'
import CallToActionCard from './Call to Action Card'
import AvailabilityCard from './Availability Card'
import LinkCard from './Link Card'
import LocationCard from './Location Card'

import style from './index.module.css'

const Contact = () => {
  const isDesktop = useMediaQuery({ minWidth: 769 })

  return (
    <section
      className={style.contact}
      id="Contact"
    >
      <header>
        <ArrowRight
          text={`DON'T \nBE SHY`}
        />
        <h2>
          CONTACT
        </h2>
      </header>

      <div
        className={style.container}
      >
        <CallToActionCard />
      
        <LinkCard
          title='About'
          description='Explore my background, skills, and journey. Click here to get to know me better'
          link='#About'
        />

        <div className={style.empty} />
        
        <LinkCard
          title='Projects'
          description='Here is all the source code to my other works, be sure to check them out!'
          link='https://github.com/AustinKong?tab=repositories'
        />

        <LocationCard />

        <div className={style.empty} />

        <LinkCard
          title='Community'
          description='Here are some of the community projects that I have been involved in.'
          link='#Community'
          blank={true}
        />

        {
          isDesktop ? (
            <AvailabilityCard />
          ) : (
            <div className={style.empty} />
          )
        }


        <div className={style.empty} />
      </div>

      <p
        className={style.footer}
      >
        © 2024 Austin Kong
      </p>
    </section>
  )
}

export default Contact