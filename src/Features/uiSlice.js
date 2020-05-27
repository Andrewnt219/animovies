import { createSlice } from '@reduxjs/toolkit';

const uiSlice = createSlice({
  name: 'ui',
  initialState: {
    isLoading: true,
    error: null,
  },
  reducers: {
    startAction: (state) => {
      state.isLoading = true;
      state.error = null;
    },
    actionFailed: (state, { payload }) => {
      state.isLoading = false;
      state.error = payload;
    },
    actionSuccess: (state) => {
      state.isLoading = false;
    },
    showError: (state, { payload }) => {
      state.error = payload;
    },
  },
});

export default uiSlice.reducer;
export const isLoadingSelector = (state) => state.ui.isLoading;
export const errorSelector = (state) => state.ui.error;
export const {
  startAction,
  actionFailed,
  actionSuccess,
  showError,
} = uiSlice.actions;
