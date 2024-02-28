import style from './projectsStyles.module.css'

const Project = ({ title, tags, description, link, image }) => {
  const DESCRIPTION_MAX_LENGTH = 50

  return (
    <div className={style.project}>
      <a href={link}>
        <img src={image} className={style.img} />
      </a>

      <div className={style.header}>
        <h4 className={style.h4}>
          {title}
        </h4>

        <ul className={style.tags}>
          {
            tags.map((item, index) => (
              <li key={index} className={style.tag}>
                <small>
                  {item}
                </small>
              </li>
            ))
          }
        </ul>
      </div>

      <p className={style.description}>
        {
          description.length > DESCRIPTION_MAX_LENGTH 
            ? (description.substring(0, DESCRIPTION_MAX_LENGTH - 1) + '...') 
            : description
        }
      </p>
    </div>
  )
}

export default Project