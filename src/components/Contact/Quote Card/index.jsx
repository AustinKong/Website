import style from '../index.module.css'

const QuoteCard = () => {
  return (
    <div
      className={style.card}
    >
      <h3
        className={style.title}
      >
        A Random Quote
      </h3>
      <p
        className={style.description}
      >
        Lorem ipsum lasldljasldjfkj
      </p>
    </div>
  )
}

export default QuoteCard