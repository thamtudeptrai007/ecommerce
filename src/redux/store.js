import { configureStore } from '@reduxjs/toolkit'
import counterReducer from './slides/counterSilce'
import userReducer from './slides/userSlide'

export const store = configureStore({
  reducer: {
    counter: counterReducer,
    user: userReducer
  },
})

