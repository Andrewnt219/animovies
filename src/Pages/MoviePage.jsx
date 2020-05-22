import React, { useEffect, useState } from 'react';
import {
  fetchMovies,
  upComingSelector,
  nowPlayingSelector,
  popularSelector,
  topRatedSelector,
} from 'Features/moviesSlice';
import { useDispatch, useSelector } from 'react-redux';
import { isLoadingSelector } from 'Features/uiSlice';
import NowPlayingSlider from 'Components/moviePage/nowPlayingSlider/NowPlayingSlider';
import AppBar from 'Components/navigation/AppBar';

function MoviePage() {
  /**
   * State
   */
  const dispatch = useDispatch();
  const isLoading = useSelector(isLoadingSelector);
  const [isMenuOpen, setIsMenuOpen] = useState(false);

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
      <AppBar isOpen={isMenuOpen} setIsOpen={setIsMenuOpen} />
      <NowPlayingSlider movies={nowPlayingMovies} />
      <h1>CONTENT</h1>
    </React.Fragment>
  );
}

export default MoviePage;
