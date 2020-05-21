import { createSlice } from '@reduxjs/toolkit';
import tmdb from 'Apis/tmdb';
import { asyncDispatchWrapper, formatMovies } from './helpers';
import { startAction, actionFailed, actionSuccess } from './uiSlice';

const moviesSlice = createSlice({
  name: 'movies',
  initialState: {
    nowPlaying: [],
    upComing: [],
    popular: [],
    topRated: [],
  },
  reducers: {
    fetchMoviesSuccess: (state, { payload }) => {
      state.nowPlaying = formatMovies(payload.nowPlaying);
      state.upComing = formatMovies(payload.upComing);
      state.popular = formatMovies(payload.popular);
      state.topRated = formatMovies(payload.topRated);
    },
  },
});

export default moviesSlice.reducer;
export const nowPlayingSelector = (state) => state.movies.nowPlaying;
export const upComingSelector = (state) => state.movies.upComing;
export const popularSelector = (state) => state.movies.popular;
export const topRatedSelector = (state) => state.movies.topRated;
export const { fetchMoviesSuccess } = moviesSlice.actions;

export const fetchMovies = (payload) => (dispatch) => {
  async function sendHttp() {
    dispatch(startAction());

    const nowPlayings = await tmdb.get('/movie/now_playing');
    const populars = await tmdb.get('/movie/popular');
    const topRateds = await tmdb.get('/movie/top_rated');
    const upComings = await tmdb.get('/movie/upcoming');

    dispatch(
      fetchMoviesSuccess({
        nowPlaying: nowPlayings.data.results,
        popular: populars.data.results,
        topRated: topRateds.data.results,
        upComing: upComings.data.results,
      })
    );
  }
  asyncDispatchWrapper(sendHttp, dispatch, actionFailed, actionSuccess);
};
