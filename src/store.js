import { configureStore } from '@reduxjs/toolkit'

import cursorReducer from './components/common/Cursor/cursorReducer.js'

const store = configureStore({
  reducer: {
    cursor: cursorReducer
  }
})

export default store