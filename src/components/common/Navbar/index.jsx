import style from './index.module.css'

const Navbar = () => {
  return (
    <nav
      className={style.navbar}
    >
      <a 
        href="#Home"
        className={style.home} 
      >
        Austin Kong
      </a>
      <a
        href="#About"
      >
        About
      </a>
      <a
        href="#Works"
      >
        Works
      </a>
      <a
        href="#Contact"
      >
        Let&apos;s Talk
      </a>
    </nav>
  )
}

export default Navbar