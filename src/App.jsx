import { Provider } from 'react-redux'

import store from './store.js'

import Cursor from './components/common/Cursor'
import Hero from './components/Hero'
import About from './components/About'

function App() {
  return (
    <Provider store={store}>
      {/* Miscellaneous Components */}
      <Cursor />

      {/* Body */}
      <header>
      </header>
      <main>
        {/* about, projects */}
        <About />
      </main>
      <footer>
        {/* contact */}
      </footer>
    </Provider>
  )
}

export default App
