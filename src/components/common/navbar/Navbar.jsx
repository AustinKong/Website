import NavLink from './NavLink.jsx'

import './navbarStyles.css'

const Navbar = () => {
  return <nav>
    <div>
      Austin Kong
    </div>
    <NavLink text={"About"}/>
    <NavLink text={"Recent Work"}/>
    <NavLink text={"Contact"}/>
  </nav>
}

export default Navbar