import React, { useEffect } from 'react';
import {
  fetchMovies,
  upComingSelector,
  nowPlayingSelector,
  popularSelector,
  topRatedSelector,
} from 'Features/moviesSlice';
import { useDispatch, useSelector } from 'react-redux';
import { isLoadingSelector } from 'Features/uiSlice';
import NowPlayingSlider from 'Components/moviePage/nowPlaying/slider/NowPlayingSlider';

function MoviePage() {
  const dispatch = useDispatch();
  const isLoading = useSelector(isLoadingSelector);

  /**
   * RETRIEVING MOVIES FROM THE STORE
   */
  const nowPlayingMovies = useSelector(nowPlayingSelector);
  const popularMovies = useSelector(popularSelector);
  const upComingMovies = useSelector(upComingSelector);
  const topRatedMovies = useSelector(topRatedSelector);

  /**
   * FETCHING MOVIES FROM API
   */
  useEffect(() => {
    dispatch(fetchMovies());
  }, [dispatch]);

  return isLoading ? (
    <div>Loading...</div>
  ) : (
    <React.Fragment>
      <h1>NAVBAR</h1>
      <NowPlayingSlider movies={nowPlayingMovies} />
      <h1>CONTENT</h1>
    </React.Fragment>
  );
}

export default MoviePage;
