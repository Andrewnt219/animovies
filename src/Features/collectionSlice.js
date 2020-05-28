import { createSlice } from '@reduxjs/toolkit';
import {
  asyncDispatchWrapper,
  fetchRequests,
  formatTmdbCollections,
} from './helpers';
import tmdb from 'Apis/tmdb';

const collectionSlice = createSlice({
  name: 'collection',
  initialState: {
    movies: [],
    tvSeries: [],
    isLoading: true,
    error: null,
  },
  reducers: {
    FETCH_COLLECTION_REQUEST: (state) => {
      state.isLoading = true;
      state.error = null;
    },
    FETCH_COLLECTION_SUCCESS: (state, { payload }) => {
      state.isLoading = false;
      state.movies = payload.movies;
      state.tvSeries = payload.tvSeries;
    },
    FETCH_COLLECTION_FAIL: (state, { payload }) => {
      state.isLoading = false;
      state.error = payload;
    },
  },
});

/* --------------------------------- EXPORT --------------------------------- */
export default collectionSlice.reducer;
export const moviesSelector = (state) => state.collection.movies;
export const tvSeriesSelector = (state) => state.collection.tvSeries;
export const collectionIsLoadingSelector = (state) =>
  state.collection.isLoading;
export const collectionErrorSelector = (state) => state.collection.error;
export const {
  FETCH_COLLECTION_REQUEST,
  FETCH_COLLECTION_SUCCESS,
  FETCH_COLLECTION_FAIL,
} = collectionSlice.actions;

/* ---------------------------------- THUNK --------------------------------- */
export const fetchCollection = (payload) => (dispatch) => {
  async function sendHttp() {
    dispatch(FETCH_COLLECTION_REQUEST());
    const URLS = [
      '/movie/now_playing',
      '/movie/top_rated',
      '/movie/popular',
      '/movie/upcoming',
      //
      '/tv/on_the_air',
      '/tv/top_rated',
      '/tv/popular',
    ];

    const responses = await fetchRequests(tmdb, URLS);
    const [
      nowPlaying,
      topRated,
      popular,
      upComing,
      //
      tvOnTheAir,
      tvTopRated,
      tvPopular,
    ] = formatTmdbCollections(responses);

    //* preparing payloads
    const movies = {
      nowPlaying,
      popular,
      topRated,
      upComing,
    };
    const tvSeries = {
      onTheAir: tvOnTheAir,
      topRated: tvTopRated,
      popular: tvPopular,
    };

    dispatch(
      FETCH_COLLECTION_SUCCESS({
        movies,
        tvSeries,
      })
    );
  }

  asyncDispatchWrapper(sendHttp, dispatch, FETCH_COLLECTION_FAIL);
};
