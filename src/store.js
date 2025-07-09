import { configureStore } from '@reduxjs/toolkit'
import cardsReducer from './features/cards/CardsSlice'

export const store = configureStore({
  reducer: {
    cards: cardsReducer
  },
})