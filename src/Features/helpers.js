import { genreMap } from '../Apis/tmdb';
import { actionSuccess, actionFailed } from './uiSlice';
export async function asyncDispatchWrapper(fn, dispatch) {
  try {
    await fn();
    dispatch(actionSuccess());
  } catch (error) {
    dispatch(
      actionFailed(
        error?.response?.data?.status_message ?? 'Something went wrong'
      )
    );
  }
}

export function formatCollection(collection) {
  return collection.map((movie) => {
    movie.genre_ids = [...mapGenreIdsToNames(movie.genre_ids, genreMap)];
    movie.backdrop_path = mapPathToImg(movie.backdrop_path);
    movie.poster_path = mapPathToImg(movie.poster_path);
    return movie;
  });
}
export function formatTmdbItem(item) {
  return {
    ...item,
    backdrop_path: mapPathToImg(item.backdrop_path),
    poster_path: mapPathToImg(item.poster_path),
  };
}
function mapGenreIdsToNames(genres) {
  return genres.map((genreId) => genreMap[genreId]);
}
function mapPathToImg(path) {
  const ORIGIN = 'http://image.tmdb.org/t/p/original';
  const notFound =
    'https://wompampsupport.azureedge.net/fetchimage?siteId=7575&v=2&jpgQuality=100&width=700&url=https%3A%2F%2Fi.kym-cdn.com%2Fentries%2Ficons%2Ffacebook%2F000%2F019%2F277%2Fconfusedtravolta.jpg';
  return path ? ORIGIN + path : notFound;
}
