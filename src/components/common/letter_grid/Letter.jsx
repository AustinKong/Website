import styles from './letterGridStyles.module.css'

const Letter = ({ character, isHighlighted }) => {
  return (
    <div className={styles.gridContainer}>
      <span className={isHighlighted ? styles.highlighted : styles.letter}>
        {character}
      </span>
    </div>
  )
}

export default Letter