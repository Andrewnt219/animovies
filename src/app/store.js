import { configureStore } from '@reduxjs/toolkit';
import collectionReducer from 'Features/collectionSlice';
import activeItemReducer from 'Features/activeItemSlice';

export default configureStore({
  reducer: {
    collection: collectionReducer,
    activeItem: activeItemReducer,
  },
});
