import { Provider } from 'react-redux'

import store from './store.js'

import Cursor from './components/common/Cursor'
import Hero from './components/Hero'
import About from './components/About'
import Projects from './components/Projects'

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
        {/* about, projects */}
        <About />
        <Projects />
      </main>
      <footer>
        {/* contact */}
      </footer>
    </Provider>
  )
}

export default App
