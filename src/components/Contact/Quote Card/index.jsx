import style from '../index.module.css'

const QUOTES = [
  ''
]

const QuoteCard = () => {
  const getQuote = () => {
    QUOTES[Math.floor(Math.random() * QUOTES.length)]
  }

  return (
    <div
      className={style.card}
    >
      <h3
        className={style.title}
      >
        Quote
      </h3>
      <p
        className={style.description}
      >
        {getQuote()}
      </p>
    </div>
  )
}

export default QuoteCard