/* --------------------------------- IMPORT --------------------------------- */
import React, { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';

import { fetchCollection, moviesSelector } from 'Features/collectionSlice';
import { isLoadingSelector } from 'Features/uiSlice';

import NowPlayingSlider from 'Components/moviePage/nowPlayingSlider/NowPlayingSlider';
import MainLayout from 'HOC/MainLayout';
import Collection from 'Components/moviePage/Collection/Collection';

/* -------------------------------- COMPONENT ------------------------------- */
// NOTE Render the page at /all
function MoviePage() {
  const dispatch = useDispatch();
  const isLoading = useSelector(isLoadingSelector);

  const movies = useSelector(moviesSelector);
  // Except the nowPlaying movies
  const SUB_MOVIE_NAMES = Object.keys(movies).slice(1).sort();

  // because useState won't change value after the first rener
  // initial value is the first SUB_MOVIE_NAME alphabetically
  const [activeMovieCollection, setActiveMovieCollection] = useState('popular');

  /**
   * FETCHING MOVIES FROM API
   */
  useEffect(() => {
    dispatch(fetchCollection());
  }, [dispatch]);

  return isLoading ? (
    <div>Loading...</div>
  ) : (
    <MainLayout>
      <NowPlayingSlider movies={movies.nowPlaying} />
      <Collection
        header={{
          sectionName: 'Movies',
          subMenuNames: SUB_MOVIE_NAMES,
          activeMenu: activeMovieCollection,
          setActiveMenu: setActiveMovieCollection,
        }}
        collection={movies[activeMovieCollection]}
      />
    </MainLayout>
  );
}

export default MoviePage;
