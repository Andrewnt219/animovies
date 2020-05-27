import { createSlice } from '@reduxjs/toolkit';
import { asyncDispatchWrapper } from './helpers';
import { startAction } from './uiSlice';

const activeItemSlice = createSlice({
  name: 'activeItem',
  initialState: {},
  reducers: {
    fetchItemDetailSuccess: (state, { payload }) => {
      return payload;
    },
  },
});

export default activeItemSlice.reducer;
export const activeItemSelector = (state) => state.activeItem;
export const { fetchItemDetailSuccess } = activeItemSlice.actions;

export const fetchItemDetail = (api, url) => (dispatch) => {
  async function getItemDetail() {
    dispatch(startAction());

    const res = await api.get(url);

    dispatch(fetchItemDetailSuccess(res.data));
  }
  asyncDispatchWrapper(getItemDetail, dispatch);
};
