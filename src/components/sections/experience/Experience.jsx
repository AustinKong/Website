import Header from '../../common/section_header/Header.jsx'
import styles from './experienceStyles.module.css'

import blob3 from '../../../images/blobs/blob3.svg'
import blob4 from '../../../images/blobs/blob4.svg'

const Experience = () => {
  const background = [
    { url: blob3, scale: 30, top: 30, left: -10, rotation: -50 },
    { url: blob4, scale: 40, top: 0, left: 75, rotation: -120 },
  ]

  return (
    <section >
      <Header title='What I do.' numbering='02' />

      <div className={styles.columnContainer}>
        <div className={styles.columnLeft}>
          <p>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Phasellus sit amet nibh malesuada, scelerisque elit at, gravida sem. Suspendisse rutrum dapibus diam ut consequat. Integer ac erat eget ipsum tincidunt bibendum. Nunc feugiat, justo ac condimentum lacinia, metus sapien condimentum arcu, efficitur consequat libero nunc sit amet tellus. Duis lacus augue, blandit nec venenatis ut, suscipit eget lectus. Curabitur fringilla et libero quis dictum. Quisque purus lacus, dapibus ac neque sit amet, varius efficitur lorem. Aliquam nec pulvinar arcu, a tristique leo. Phasellus posuere iaculis massa nec dictum. Cras et pulvinar leo. Nullam et blandit tortor, fringilla aliquam ligula.
          </p>
        </div>

        <div className={styles.columnRight}>

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

export default Experience