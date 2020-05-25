import { configureStore } from '@reduxjs/toolkit';
import collectionReducer from 'Features/collectionSlice';
import uiReducer from 'Features/uiSlice';

export default configureStore({
  reducer: {
    collection: collectionReducer,
    ui: uiReducer,
  },
});
