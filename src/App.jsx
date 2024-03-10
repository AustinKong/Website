import { Provider } from 'react-redux'

import store from './store.js'

import Cursor from './components/common/Cursor'
import Hero from './components/Hero'

function App() {
  return (
    <Provider store={store}>
      {/* Miscellaneous Components */}
      <Cursor />

      { /* Body */}
      <main>
        <Hero />
      </main>
    </Provider>
  )
}

export default App
