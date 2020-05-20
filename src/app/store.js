import { configureStore } from '@reduxjs/toolkit';
import moviesReducer from 'Features/moviesSlice';
import uiReducer from 'Features/uiSlice';

export default configureStore({
  reducer: {
    movies: moviesReducer,
    ui: uiReducer,
  },
});
