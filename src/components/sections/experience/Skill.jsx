import style from './skillStyles.module.css'

const Skill = ({ title, list, index }) => {
  return (
    <div className={style.container}>
      <div className={style.containerLeft}>
        <small>
          {`${index}.`}
        </small>
      </div>
      <div className={style.containerRight}>
        <h4 className={style.h4}>
          {title}
        </h4>
        <ul>
          {
            list.map((item, index) => (
              <li key={index} className={style.li}>
                {item}
              </li>
            ))
          }
        </ul>
      </div>
    </div>
  )
}

export default Skill