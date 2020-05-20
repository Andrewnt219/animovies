import { configureStore } from '@reduxjs/toolkit';
import moviesReducer from 'Features/moviesSlice';

export default configureStore({
  reducer: {
    movies: moviesReducer,
  },
});
