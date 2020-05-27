import { movieGenreMap } from '../Apis/tmdb';
export async function asyncDispatchWrapper(
  fn,
  dispatch,
  actionFailed,
  actionSuccess
) {
  try {
    await fn();
    actionSuccess && dispatch(actionSuccess());
  } catch (error) {
    actionFailed &&
      dispatch(
        actionFailed(
          error?.response?.data?.status_message ?? 'Something went wrong'
        )
      );
  }
}

export function formatCollection(collection, genreMap = movieGenreMap) {
  return collection.map((movie) => {
    movie.genre_ids = [...mapGenreIdsToNames(movie.genre_ids, genreMap)];
    movie.backdrop_path = mapPathToImg(movie.backdrop_path);
    movie.poster_path = mapPathToImg(movie.poster_path);
    return movie;
  });
}
function mapGenreIdsToNames(genres, genreMap) {
  return genres.map((genreId) => genreMap[genreId]);
}
function mapPathToImg(path) {
  const ORIGIN = 'http://image.tmdb.org/t/p/original';
  const notFound =
    'https://wompampsupport.azureedge.net/fetchimage?siteId=7575&v=2&jpgQuality=100&width=700&url=https%3A%2F%2Fi.kym-cdn.com%2Fentries%2Ficons%2Ffacebook%2F000%2F019%2F277%2Fconfusedtravolta.jpg';
  return path ? ORIGIN + path : notFound;
}
