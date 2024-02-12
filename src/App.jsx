// Components
import Hero from './components/hero/Hero.jsx'
import About from './components/about/About.jsx'
import RecentWork from './components/recent_work/RecentWork.jsx'
import Contact from './components/contact/Contact.jsx'
import Navbar from './components/common/navbar/Navbar.jsx'

// Styles
import './fonts/fonts.css'
import './defaultStyles.css'

const App = () => {
  return (
    <>
      <Navbar />
      <Hero />
    </>
  )
}

export default App
