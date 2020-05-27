import { configureStore } from '@reduxjs/toolkit';
import collectionReducer from 'Features/collectionSlice';
import uiReducer from 'Features/uiSlice';
import activeItemReducer from 'Features/activeItemSlice';

export default configureStore({
  reducer: {
    collection: collectionReducer,
    ui: uiReducer,
    activeItem: activeItemReducer,
  },
});
