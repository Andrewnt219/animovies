import { genreMap } from '../Apis/tmdb';
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
