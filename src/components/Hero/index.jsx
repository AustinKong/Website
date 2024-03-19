import LetterGrid from './LetterGrid'
import style from './index.module.css'

const Hero = () => {
  return (
    <section
      className={style.hero}
    >
      <div
        className={style.container}
      >
        <LetterGrid />
        <div
          className={style.title}
        >
          <h1>
            Austin Kong <br />
            2024
          </h1>
          <p>
            Web Developer, Game Developer, <br />
            Software Engineer
          </p>
        </div>

      </div>
    </section>
  )
}

export default Hero