import { configureStore } from '@reduxjs/toolkit';
import counterReducer from '../reduxRTK/counterSlice';
import sandwichReducer from '../reduxRTK/sandwichSlice';

const store = configureStore({
  reducer: {
    counter: counterReducer,
    sandwich: sandwichReducer,
  },
});

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;

export default store;