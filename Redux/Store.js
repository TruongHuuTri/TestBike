// redux/store.js
import { configureStore } from '@reduxjs/toolkit';
import bikesReducer from './bikesSlice';

const store = configureStore({
  reducer: {
    bike: bikesReducer,
  },
});

export default store;
