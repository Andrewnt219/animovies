import { createSlice } from '@reduxjs/toolkit';
import tmdb from 'Apis/tmdb';
import { asyncDispatchWrapper, mapGenreIdToName } from './helpers';

const moviesSlice = createSlice({
  name: 'movies',
  initialState: [],
  reducers: {
    fetchMoviesSuccess: (state, { payload }) => {
      return mapGenreIdToName(payload);
    },
  },
});

export default moviesSlice.reducer;
export const moviesSelector = (state) => state.movies;
export const { fetchMoviesSuccess } = moviesSlice.actions;

export const fetchNowPlaying = (payload) => (dispatch) => {
  async function sendHttp() {
    const res = await tmdb.get('/movie/now_playing');

    dispatch(fetchMoviesSuccess(res.data.results));
  }

  asyncDispatchWrapper(sendHttp, dispatch);
};
