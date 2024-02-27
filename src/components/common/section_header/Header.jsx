import styles from './sectionHeaderStyles.module.css'

const Header = ({ title, numbering }) => {
  return (
    <header className={styles.header}>
      <h3 className={styles.h3}>
        {title}
      </h3>
      <h2 className={styles.h2}>
        {numbering}
      </h2>
    </header>
  )
}

export default Header