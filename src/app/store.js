import { configureStore } from '@reduxjs/toolkit';
import collectionReducer from 'Features/collectionSlice';
import activeItemReducer from 'Features/activeItemSlice';
import genreReducer from 'Features/genreSlice';
import searchReducer from 'Features/searchSlice';

export default configureStore({
  reducer: {
    collection: collectionReducer,
    activeItem: activeItemReducer,
    genre: genreReducer,
    search: searchReducer,
  },
});
