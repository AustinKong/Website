import style from './projectsStyles.module.css'

const Project = ({ title, tags, description, link, image, col }) => {
  const DESCRIPTION_MAX_LENGTH = 50

  return (
    <div className={style.project} style={{ gridColumn: `span ${col}` }}>
      <a href={link}>
        <img src={image} className={style.img} />
      </a>

      <div className={style.header}>
        <h5 className={style.h5}>
          {title}
        </h5>

        <ul className={style.tags}>
          {
            tags.map((item, index) => (
              <li key={index} className={style.tag}>
                {item}
              </li>
            ))
          }
        </ul>
      </div>

      <p className={style.description}>
        <small>
          {
            description.length > DESCRIPTION_MAX_LENGTH
              ? (description.substring(0, DESCRIPTION_MAX_LENGTH - 1) + '...')
              : description
          }
        </small>
      </p>
    </div>
  )
}

export default Project