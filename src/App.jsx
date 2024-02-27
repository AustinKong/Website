// Components
import Navbar from './components/common/navbar/Navbar.jsx'
import Hero from './components/sections/hero/Hero.jsx'
import About from './components/sections/about/About.jsx'
import Experience from './components/sections/experience/Experience.jsx'
import Projects from './components/sections/projects/Projects.jsx'
import Contact from './components/sections/contact/Contact.jsx'

// Styles
import './fonts/fonts.css'
import './defaultStyles.css'

const App = () => {
  return (
    <>
      <Hero />
      <div className='content'>
        <About />
        <Experience />
      </div>
    </>
  )
}

export default App
