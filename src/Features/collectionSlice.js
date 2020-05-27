import { createSlice } from '@reduxjs/toolkit';
import tmdb, { genreMap } from 'Apis/tmdb';
import { asyncDispatchWrapper, formatCollection } from './helpers';
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

    //* movie collection
    const { data: nowPlayings } = await tmdb.get('/movie/now_playing');
    const { data: topRateds } = await tmdb.get('/movie/top_rated');
    const { data: populars } = await tmdb.get('/movie/popular');
    const { data: upComings } = await tmdb.get('/movie/upcoming');
    //* tv collection
    const { data: tvOnTheAir } = await tmdb.get('/tv/on_the_air');
    const { data: tvTopRateds } = await tmdb.get('/tv/top_rated');
    const { data: tvPopulars } = await tmdb.get('/tv/popular');

    //* preparing payloads
    const movies = {
      nowPlaying: [...formatCollection(nowPlayings.results)],
      popular: [...formatCollection(populars.results)],
      topRated: [...formatCollection(topRateds.results)],
      upComing: [...formatCollection(upComings.results)],
    };
    const tvSeries = {
      onTheAir: [...formatCollection(tvOnTheAir.results)],
      topRated: [...formatCollection(tvTopRateds.results)],
      popular: [...formatCollection(tvPopulars.results)],
    };

    dispatch(
      fetchCollectionSuccess({
        movies,
        tvSeries,
      })
    );
  }
  asyncDispatchWrapper(sendHttp, dispatch, actionFailed, actionSuccess);
};
