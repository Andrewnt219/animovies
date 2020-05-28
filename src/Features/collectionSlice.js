import { createSlice } from '@reduxjs/toolkit';
import {
  asyncDispatchWrapper,
  fetchRequests,
  formatTmdbCollections,
  // formatJikanCollections,
} from './helpers';
import tmdb from 'Apis/tmdb';
// import jikan from 'Apis/jikan';

const collectionSlice = createSlice({
  name: 'collection',
  initialState: {
    collections: {
      movies: [],
      tvSeries: [],
      // animes: [],
      // mangas: [],
    },
    isLoading: true,
    error: null,
  },
  reducers: {
    fetchCollectionRequest: (state) => {
      state.isLoading = true;
      state.error = null;
    },
    fetchCollectionSuccess: (state, { payload }) => {
      state.isLoading = false;
      state.collections.movies = payload.movies;
      state.collections.tvSeries = payload.tvSeries;
      // state.collections.mangas = payload.mangas;
      // state.collections.animes = payload.animes;
    },
    fetchCollectionFail: (state, { payload }) => {
      state.isLoading = false;
      state.error = payload;
    },
  },
});

/* --------------------------------- EXPORT --------------------------------- */
export default collectionSlice.reducer;
export const collectionsSelector = (state) => state.collection.collections;

export const collectionIsLoadingSelector = (state) =>
  state.collection.isLoading;
export const collectionErrorSelector = (state) => state.collection.error;
export const {
  fetchCollectionRequest,
  fetchCollectionSuccess,
  fetchCollectionFail,
} = collectionSlice.actions;

/* ---------------------------------- THUNK --------------------------------- */
export const fetchCollection = (payload) => (dispatch) => {
  async function sendHttp() {
    dispatch(fetchCollectionRequest());

    const [
      nowPlaying,
      topRated,
      popular,
      upComing,
      //
      tvOnTheAir,
      tvTopRated,
      tvPopular,
    ] = await fetchTmdbItems();

    // const [
    //   animeAiring,
    //   animeUpcoming,
    //   animeTv,
    //   animeMovie,
    //   //
    //   manga,
    //   manhwa,
    //   manhua,
    // ] = await fetchJikanItems();

    // //* preparing payloads
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

    // const animes = {
    //   airing: animeAiring,
    //   upcoming: animeUpcoming,
    //   tv: animeTv,
    //   movie: animeMovie,
    // };
    // const mangas = { manga, manhwa, manhua };

    dispatch(
      fetchCollectionSuccess({
        movies,
        tvSeries,
        // animes,
        // mangas,
      })
    );
  }

  asyncDispatchWrapper(sendHttp, dispatch, fetchCollectionFail);
};
async function fetchTmdbItems() {
  const TMDB_URLS = [
    '/movie/now_playing',
    '/movie/top_rated',
    '/movie/popular',
    '/movie/upcoming',
    //
    '/tv/on_the_air',
    '/tv/top_rated',
    '/tv/popular',
  ];
  const tmdbResponses = await fetchRequests(tmdb, TMDB_URLS);
  return formatTmdbCollections(tmdbResponses);
}

// async function fetchJikanItems() {
//   const JIKAN_URLS = [
//     //
//     '/top/anime/1/airing',
//     '/top/anime/1/upcoming',
//     '/top/anime/1/tv',
//     '/top/anime/1/movie',
//     //
//     '/top/manga/1/manga',
//     '/top/manga/1/manhwa',
//     '/top/manga/1/manhua',
//   ];
//   const jikanResponses = await fetchRequests(jikan, JIKAN_URLS);
//   return formatJikanCollections(jikanResponses);
// }

// async function populateAnimeItems(animes) {
//   for (let anime of animes) {
//     const { data } = await jikan.get(`/anime/${anime.mal_id}`);
//     anime = data;
//   }
// }
