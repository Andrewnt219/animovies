import { createSlice } from '@reduxjs/toolkit';
import { asyncDispatchWrapper } from './helpers';
import { startAction } from './uiSlice';
import tmdb from 'Apis/tmdb';
import jikan from 'Apis/jikan';
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

export const fetchTmdbDetail = ({ itemType, itemId }) => (dispatch) => {
  async function getItemDetail() {
    dispatch(startAction());

    //* FETCHING
    //get item detail
    const { data: itemDetail } = await tmdb.get(`/${itemType}/${itemId}`);
    // get item videos
    const { data: videos } = await tmdb.get(`/${itemType}/${itemId}/videos`);
    // get item recommendations
    const { data: recommendations } = await tmdb.get(
      `/${itemType}/${itemId}/recommendations`
    );

    //* MERGING responses
    const payload = {
      itemDetail,
      videos: { ...videos.results },
      recommendations: [...recommendations.results],
    };

    dispatch(fetchItemDetailSuccess(payload));
  }
  asyncDispatchWrapper(getItemDetail, dispatch);
};

export const fetchJikanDetail = ({ itemType, itemId }) => (dispatch) => {
  async function getItemDetail() {
    dispatch(startAction());

    const res = await jikan.get(`/${itemType}/${itemId}`);

    dispatch(fetchItemDetailSuccess(res.data));
  }
  asyncDispatchWrapper(getItemDetail, dispatch);
};
