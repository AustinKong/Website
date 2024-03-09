import style from './index.module.css'

const LetterCell = ({ character, highlight }) => {
  return (
    <span
      className={ highlight ? style.highlightCell : style.defaultCell }
    >
      {character}
    </span>
  )
}

export default LetterCell