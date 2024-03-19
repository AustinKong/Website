import ArrowRight from '../common/arrows/ArrowRight.jsx'
import CallToActionCard from './Call to Action Card'
import AvailabilityCard from './Availability Card'
import LinkCard from './Link Card'
import LocationCard from './Location Card'

import style from './index.module.css'

const Contact = () => {
  return (
    <section
      className={style.contact}
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
          description='hello worldtest'
          link=''
        />

        <div />
        
        <LinkCard
          title='Projects'
          description='Here is a curated list of my projects that I am very proud of. Be sure to check them out!'
          link=''
        />

        <LocationCard />

        <div />
        <div />

        <AvailabilityCard />
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