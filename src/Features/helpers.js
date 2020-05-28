import { genreMap } from '../Apis/tmdb';

/* --------------------------- formating requests --------------------------- */

//NOTE put async action in a trycatch block and dispatch suitable action
export async function asyncDispatchWrapper(fn, dispatch, actionFailed) {
  try {
    await fn();
  } catch (error) {
    console.log(error);
    dispatch(actionFailed(error?.response?.data?.status_message ?? error));
  }
}

// NOTE send request and format the reponse from tmdb
export async function fetchRequests(api, urls) {
  const responses = [];
  for (const url of urls) {
    responses.push((await api.get(url)).data);
  }
  return responses;
}

/* ------------------ formatting the response(s) from TMDB ------------------ */

//* format the collections from tmdb
export function formatTmdbCollections(collections) {
  return collections.map((collection) =>
    formatCollection(collection.results, formatTmdbItem)
  );
}

//* format the collections from jikan
export function formatJikanCollections(collections) {
  return collections.map((collection) => formatCollection(collection.top));
}

//* format one collection from tmdb
export function formatCollection(collection, formatter) {
  return collection.map((item) => (formatter ? formatter(item) : item));
}

// * format an individual Tmdb item
export function formatTmdbItem(item) {
  return {
    ...item,
    genre_ids: mapGenreIdsToNames(item.genre_ids),
    backdrop_path: mapPathToImg(item.backdrop_path),
    poster_path: mapPathToImg(item.poster_path),
  };
}

/* --------------------------- formatting helpers --------------------------- */

// * populate genre_ids (if exists) to [{id, name}]
function mapGenreIdsToNames(genres) {
  return genres?.map((genreId) => genreMap[genreId]);
}

// * rewrite the full path for imgs
function mapPathToImg(path) {
  const ORIGIN = 'http://image.tmdb.org/t/p/original';
  const notFound =
    'https://wompampsupport.azureedge.net/fetchimage?siteId=7575&v=2&jpgQuality=100&width=700&url=https%3A%2F%2Fi.kym-cdn.com%2Fentries%2Ficons%2Ffacebook%2F000%2F019%2F277%2Fconfusedtravolta.jpg';
  return path ? ORIGIN + path : notFound;
}
