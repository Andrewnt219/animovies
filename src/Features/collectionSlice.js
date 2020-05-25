import { createSlice } from '@reduxjs/toolkit';
import tmdb from 'Apis/tmdb';
import { asyncDispatchWrapper, formatMovies } from './helpers';
import { startAction, actionFailed, actionSuccess } from './uiSlice';

const collectionSlice = createSlice({
  name: 'collection',
  initialState: {
    movies: [],
    tvSeries: [],
  },
  reducers: {
    fetchCollectionSuccess: (state, { payload }) => {
      state.movies = payload.movies;
      state.tvSeries = payload.tvSeries;
    },
  },
});

export default collectionSlice.reducer;
export const moviesSelector = (state) => state.collection.movies;
export const tvSeriesSelector = (state) => state.collection.tvSeries;
export const { fetchCollectionSuccess } = collectionSlice.actions;

export const fetchCollection = (payload) => (dispatch) => {
  async function sendHttp() {
    dispatch(startAction());

    const { data: nowPlayings } = await tmdb.get('/movie/now_playing');
    const { data: topRateds } = await tmdb.get('/movie/top_rated');
    const { data: populars } = await tmdb.get('/movie/popular');
    const { data: upComings } = await tmdb.get('/movie/upcoming');

    const movies = {
      nowPlaying: [...formatMovies(nowPlayings.results)],
      popular: [...formatMovies(populars.results)],
      topRated: [...formatMovies(topRateds.results)],
      upComing: [...formatMovies(upComings.results)],
    };
    const tvSeries = [];

    dispatch(
      fetchCollectionSuccess({
        movies,
        tvSeries,
      })
    );
  }
  asyncDispatchWrapper(sendHttp, dispatch, actionFailed, actionSuccess);
};
