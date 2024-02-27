import styles from './navbarStyles.module.css'

const NavLink = ({ text }) => {
  return (
    <li className={styles.li}>
      <a className={styles.a}>
        {text}
      </a>
    </li>
  )
}

export default NavLink