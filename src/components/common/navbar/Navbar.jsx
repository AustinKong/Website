import NavLink from './NavLink.jsx'

import './navbarStyles.css'

const Navbar = () => {
  return (
    <nav>
      <div className='logo'>Austin Kong</div>
      <ul className='nav-links'>
        <NavLink text={"About"} />
        <NavLink text={"Recent Work"} />
        <NavLink text={"Contact"} />
      </ul>
    </nav>
  )
}

export default Navbar