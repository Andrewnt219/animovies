import { configureStore } from '@reduxjs/toolkit';
import collectionReducer from 'Features/collectionSlice';
import activeItemReducer from 'Features/activeItemSlice';
import genreReducer from 'Features/genreSlice';

export default configureStore({
  reducer: {
    collection: collectionReducer,
    activeItem: activeItemReducer,
    genre: genreReducer,
  },
});
