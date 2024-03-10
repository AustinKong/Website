import { createSlice } from '@reduxjs/toolkit'

const initialState = 'DEFAULT'

/* Stores only cursor state */
const cursorSlice = createSlice({
  name: 'cursor',
  initialState,
  reducers: {
    // Payload to have string state
    setState(state, action) {
      return action.payload
    }
  }
})

export const { setState } = cursorSlice.actions
export default cursorSlice.reducer