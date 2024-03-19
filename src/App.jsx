import { Provider } from 'react-redux'

import store from './store.js'

import Cursor from './components/common/Cursor'
import Hero from './components/Hero'
import About from './components/About'
import Projects from './components/Projects'
import Contact from './components/Contact'

function App() {
  return (
    <Provider store={store}>
      {/* Miscellaneous Components */}
      <Cursor />

      {/* Body */}
      <header>
        <Hero />
      </header>
      <main>
        <About />
        <Projects />
      </main>
      <footer>
        <Contact />
      </footer>
    </Provider>
  )
}

export default App
