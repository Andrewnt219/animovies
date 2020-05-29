import { createSlice } from '@reduxjs/toolkit';
import {
  asyncDispatchWrapper,
  formatTmdbItem,
  fetchRequests,
  formatCollection,
} from './helpers';

import tmdb from 'Apis/tmdb';
import jikan from 'Apis/jikan';
const activeItemSlice = createSlice({
  name: 'activeItem',
  initialState: {
    isLoading: true,
    error: null,
    item: {},
  },
  reducers: {
    fetchItemDetailRequest: (state) => {
      state.isLoading = true;
      state.error = null;
    },

    fetchItemDetailSuccess: (state, { payload }) => {
      state.isLoading = false;
      state.item = payload;
    },

    fetchItemDetailFail: (state, { payload }) => {
      state.isLoading = false;
      state.error = payload;
    },
  },
});

export default activeItemSlice.reducer;
export const activeItemSelector = (state) => state.activeItem.item;
export const activeItemIsLoadingSelector = (state) =>
  state.activeItem.isLoading;
export const activeItemError = (state) => state.activeItem.error;
export const {
  fetchItemDetailSuccess,
  fetchItemDetailRequest,
  fetchItemDetailFail,
} = activeItemSlice.actions;

export const fetchTmdbDetail = ({ itemType, itemId }) => (dispatch) => {
  async function getItemDetail() {
    dispatch(fetchItemDetailRequest());
    const URLS = [
      `/${itemType}/${itemId}`,
      `/${itemType}/${itemId}/videos`,
      `/${itemType}/${itemId}/recommendations`,
    ];
    //* FETCHING
    const [itemDetail, videos, recommendations] = await fetchRequests(
      tmdb,
      URLS
    );

    //* MERGING responses
    const payload = {
      itemDetail: formatTmdbItem(itemDetail),
      videos: { ...formatCollection(videos.results, formatTmdbItem) },
      recommendations: [
        ...formatCollection(recommendations.results, formatTmdbItem),
      ],
    };

    dispatch(fetchItemDetailSuccess(payload));
  }
  asyncDispatchWrapper(getItemDetail, dispatch, fetchItemDetailFail);
};

export const fetchJikanDetail = ({ itemType, itemId }) => (dispatch) => {
  async function getItemDetail() {
    dispatch(fetchItemDetailRequest());

    const res = await jikan.get(`/${itemType}/${itemId}`);

    dispatch(fetchItemDetailSuccess(res.data));
  }
  asyncDispatchWrapper(getItemDetail, dispatch, fetchItemDetailFail);
};
