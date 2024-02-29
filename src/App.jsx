import { useState } from 'react'

// Components
import Cursor from './components/common/cursor/Cursor.jsx'
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
  const [cursorState, setCursorState] = useState('default')

  const updateState = state => {
    setCursorState(state)
  }

  return (
    <>
      <Cursor cursorState={cursorState} />

      <Hero />
      <main className='content'>
        <About />
        <Experience />
        <Projects />
      </main>
      <Contact />
    </>
  )
}

export default App
