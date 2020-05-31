import { createSlice } from '@reduxjs/toolkit';
import tmdb from 'Apis/tmdb';
import {
  asyncDispatchWrapper,
  formatCollection,
  formatTmdbItem,
} from './helpers';

const searchSlice = createSlice({
  name: 'search',
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
    fetchSearchRequest: (state) => {
      state.isLoading = true;
      state.error = null;
    },
    fetchSearchSuccess: (state, { payload }) => {
      state.isLoading = false;
      state.collection.movies = payload.movies;
      state.collection.tvSeries = payload.tvSeries;
      state.collection.numberOfPages = payload.numberOfPages;
    },
    fetchSearchFailed: (state, { payload }) => {
      state.isLoading = false;
      state.error = payload;
    },
  },
});

export default searchSlice.reducer;
export const {
  fetchSearchFailed,
  fetchSearchSuccess,
  fetchSearchRequest,
} = searchSlice.actions;
export const searchIsLoadingSelector = (state) => state.search.isLoading;
export const searchErrorSelector = (state) => state.search.error;
export const searchCollectionSelector = (state) => state.search.collection;

export const fetchSearch = ({ searchTerm, page }) => (dispatch) => {
  asyncDispatchWrapper(
    getSearchResults.bind(this, searchTerm, page),
    dispatch,
    fetchSearchFailed
  );

  async function getSearchResults(searchTerm, page) {
    dispatch(fetchSearchRequest());

    const { data: moviesResponse } = await sendDiscoverRequest(
      'movie',
      searchTerm,
      page
    );
    const { data: tvResponse } = await sendDiscoverRequest(
      'tv',
      searchTerm,
      page
    );

    dispatch(
      fetchSearchSuccess({
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
function sendDiscoverRequest(endpoint, searchTerm, page) {
  return tmdb.get(`search/${endpoint}`, {
    params: {
      page,
      query: searchTerm,
    },
  });
}
