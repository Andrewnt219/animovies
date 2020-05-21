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
    fetchNowPlaying: (state, { payload }) => {
      state.nowPlaying = formatMovies(payload);
    },
    fetchUpComing: (state, { payload }) => {
      state.upComing = formatMovies(payload);
    },
    fetchPopular: (state, { payload }) => {
      state.popular = formatMovies(payload);
    },
    fetchTopRated: (state, { payload }) => {
      state.topRated = formatMovies(payload);
    },
  },
});

export default moviesSlice.reducer;
export const moviesSelector = (state) => state.movies;
export const {
  fetchNowPlaying,
  fetchPopular,
  fetchTopRated,
  fetchUpComing,
} = moviesSlice.actions;

export const fetchMovies = (payload) => (dispatch) => {
  async function sendHttp() {
    dispatch(startAction());
    const nowPlayings = await tmdb.get('/movie/now_playing');
    const populars = await tmdb.get('/movie/popular');
    const topRateds = await tmdb.get('/movie/top_rated');
    const upComings = await tmdb.get('/movie/upcoming');

    dispatch(fetchNowPlaying(nowPlayings.data.results));
    dispatch(fetchPopular(populars.data.results));
    dispatch(fetchTopRated(topRateds.data.results));
    dispatch(fetchUpComing(upComings.data.results));
  }

  asyncDispatchWrapper(sendHttp, dispatch, actionFailed, actionSuccess);
};
