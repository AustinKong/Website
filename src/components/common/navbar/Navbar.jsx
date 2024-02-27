import NavLink from './NavLink.jsx'
import styles from './navbarStyles.module.css'

const Navbar = () => {
  const navLinks = [
    { text: 'About '},
    { text: 'Recent Work'},
    { text: 'Contact' }
  ]
  return (
    <nav>
      <h1>Austin Kong</h1>
      <ul className={styles.navLinks}>
        {navLinks.map((item, index) => (
          <NavLink 
            key={index} 
            text={item.text} 
          />
        ))}
      </ul>
    </nav>
  )
}

export default Navbar