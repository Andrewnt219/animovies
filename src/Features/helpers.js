import { genreMap } from '../Apis/tmdb';
export async function asyncDispatchWrapper(
  fn,
  dispatch,
  setIsLoading,
  setError
) {
  try {
    await fn();
  } catch (error) {
    setError && dispatch(setError(error));
  }
  setIsLoading && dispatch(setIsLoading(false));
}

export function mapGenreIdToName(movies) {
  return movies.map((movie) => {
    // mapping genreIds
    const genres = movie.genre_ids.map((genreId) => {
      return genreMap[genreId];
    });
    // replace the original genre_ids with named genre_ids
    movie.genre_ids = [...genres];
    return movie;
  });
}
