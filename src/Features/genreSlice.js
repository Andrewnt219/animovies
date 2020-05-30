import { createSlice } from '@reduxjs/toolkit';
import tmdb, { findGenreId } from 'Apis/tmdb';
import { asyncDispatchWrapper } from './helpers';

const genreSlice = createSlice({
  name: 'genre',
  initialState: {
    isLoading: true,
    error: null,
    collection: {
      movies: [],
      tvSeries: [],
    },
  },
  reducers: {
    fetchGenreRequest: (state) => {
      state.isLoading = true;
      state.error = null;
    },
    fetchGenreSuccess: (state, { payload }) => {
      state.isLoading = false;
      state.collection.movies = payload.movies;
      state.collection.tvSeries = payload.tvSeries;
    },
    fetchGenreFailed: (state, { payload }) => {
      state.isLoading = false;
      state.error = payload;
    },
  },
});

export default genreSlice.reducer;
export const {
  fetchGenreFailed,
  fetchGenreSuccess,
  fetchGenreRequest,
} = genreSlice.actions;
export const genreIsLoadingSelector = (state) => state.genre.isLoading;
export const genreErrorSelector = (state) => state.genre.error;
export const genreGenreSelector = (state) => state.genre.collection;

export const fetchGenre = ({ genreName, page }) => (dispatch) => {
  const genreId = findGenreId(genreName);

  asyncDispatchWrapper(
    getGenre.bind(this, genreId, page),
    dispatch,
    fetchGenreFailed
  );

  async function getGenre(genreId, page) {
    dispatch(fetchGenreRequest());

    const { data: moviesResponse } = await sendDiscoverRequest(
      'movie',
      genreId,
      page
    );
    const { data: tvResponse } = await sendDiscoverRequest('tv', genreId, page);

    dispatch(
      fetchGenreSuccess({
        movies: moviesResponse.results,
        tvSeries: tvResponse.results,
      })
    );
  }
};
function sendDiscoverRequest(endpoint, genreId, page) {
  return tmdb.get(`discover/${endpoint}`, {
    params: {
      page,
      with_genres: genreId,
    },
  });
}
