import ArrowLeft from '../../common/arrows/ArrowLeft.jsx'
import Image from './Image'
import Arrow from './Arrow'

import style from './index.module.css'

const Project = ({ title, tags, image, description, id, link }) => {

  return (
    <div
      className={style.project}
    >
      <div
        className={style.projectContainer}
      >
        <div
          className={style.header}
        >
          <div>
            <h3
              className={style.title}
            >
              {title}
            </h3>
            <ul
              className={style.tags}
            >
              {
                tags.map((tag, index) => (
                  <li
                    key={index}
                    className={style.tag}
                  >
                    {index > 0 ? '•' : ''}
                    {tag}
                  </li>
                ))
              }
            </ul>
          </div>

          <Arrow
            link={link}
          />
        </div>
        
        <Image
          image={image}
          link={link}
        />

        <p
          className={style.description}
        >
          {description}
        </p>
      </div>

      <ArrowLeft
        text={`PROJECT\n${id < 10 ? '0' + id : id}`}
      />
    </div>
  )
}

export default Project