import { useState, useEffect } from 'react'

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
  /* --- Cursor management START --- */

  const [cursorState, setCursorState] = useState('default')
  const [cursorPosition, setCursorPosition] = useState({ x: 0, y: 0 });

  const updateCursorPosition = e => {
    setCursorPosition({ x: e.clientX, y: e.clientY })
  }

  // States { 'default', 'project_over', 'intro_over' }
  const updateCursorState = state => {
    setCursorState(state)
  }

  useEffect(() => {
    window.addEventListener("mousemove", updateCursorPosition)
    return () => {
      window.removeEventListener("mousemove", updateCursorPosition)
    }
  })

  /* --- Cursor management END --- */

  return (
    <>
      <Cursor cursorState={cursorState} cursorPosition={cursorPosition}/>

      <Navbar />
      <main className='content'>
        <About cursorPosition={cursorPosition} />
        <Experience />
        <Projects updateCursorState={updateCursorState} />
      </main>
    </>
  )
}

export default App
