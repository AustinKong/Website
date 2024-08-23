import style from '../index.module.css'

const AvailabilityCard = () => {
  return (
    <div
      className={style.card}
    >
      <h3
        className={style.title}
      >
        Availability
      </h3>

      <p
        className={style.description}
      >
        My current status is: <br />
        Looking for internships!
      </p>
    </div>
  )
}

export default AvailabilityCard