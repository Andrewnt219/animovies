/* --------------------------------- IMPORT --------------------------------- */
import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';

import {
  fetchMovies,
  nowPlayingSelector,
  /* upComingSelector,
  popularSelector,
  topRatedSelector, */
} from 'Features/moviesSlice';
import { isLoadingSelector } from 'Features/uiSlice';

import NowPlayingSlider from 'Components/moviePage/nowPlayingSlider/NowPlayingSlider';
import MainLayout from 'HOC/MainLayout';

/* -------------------------------- COMPONENT ------------------------------- */
// NOTE Render the page at /all
function MoviePage() {
  /**
   * State
   */
  const dispatch = useDispatch();
  const isLoading = useSelector(isLoadingSelector);

  /**
   * RETRIEVING MOVIES FROM THE STORE
   */
  const nowPlayingMovies = useSelector(nowPlayingSelector);
  // const popularMovies = useSelector(popularSelector);
  // const upComingMovies = useSelector(upComingSelector);
  // const topRatedMovies = useSelector(topRatedSelector);

  /**
   * FETCHING MOVIES FROM API
   */
  useEffect(() => {
    dispatch(fetchMovies());
  }, [dispatch]);

  return isLoading ? (
    <div>Loading...</div>
  ) : (
    <MainLayout>
      <NowPlayingSlider movies={nowPlayingMovies} />
      <h1>CONTENT</h1>
    </MainLayout>
  );
}

export default MoviePage;
