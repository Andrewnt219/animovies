import { createSlice } from '@reduxjs/toolkit';
import tmdb, { findGenreId } from 'Apis/tmdb';
import {
  asyncDispatchWrapper,
  formatCollection,
  formatTmdbItem,
} from './helpers';

const genreSlice = createSlice({
  name: 'genre',
  initialState: {
    isLoading: true,
    error: null,
    collection: {
      movies: [],
      tvSeries: [],
      numberOfPages: 0,
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
      state.collection.numberOfPages = payload.numberOfPages;
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
export const genreCollectionSelector = (state) => state.genre.collection;

export const fetchGenre = ({ genreName, page, queries }) => (dispatch) => {
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
      page,
      queries
    );
    const { data: tvResponse } = await sendDiscoverRequest(
      'tv',
      genreId,
      page,
      queries
    );

    dispatch(
      fetchGenreSuccess({
        movies: formatCollection(moviesResponse.results, formatTmdbItem),
        tvSeries: formatCollection(tvResponse.results, formatTmdbItem),
        numberOfPages:
          moviesResponse.total_pages > tvResponse.total_pages
            ? tvResponse.total_pages
            : moviesResponse.total_pages,
      })
    );
  }
};
function sendDiscoverRequest(endpoint, genreId, page, queries) {
  return tmdb.get(`discover/${endpoint}`, {
    params: {
      page,
      with_genres: genreId,
      ...queries,
    },
  });
}
