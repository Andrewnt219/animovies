/* --------------------------------- IMPORT --------------------------------- */
import React, { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import styled from 'styled-components/macro';

import {
  fetchCollection,
  moviesSelector,
  tvSeriesSelector,
  collectionIsLoadingSelector,
} from 'Features/collectionSlice';

import NowPlayingSlider from 'Components/moviePage/nowPlayingSlider/NowPlayingSlider';
import MainLayout from 'HOC/MainLayout';
import Collection from 'Components/moviePage/Collection/Collection';
import ItemContext from 'Context/ItemContext';

/* -------------------------------- COMPONENT ------------------------------- */
// NOTE Render the page at /all
function MoviePage() {
  const dispatch = useDispatch();
  const isLoading = useSelector(collectionIsLoadingSelector);

  const movies = useSelector(moviesSelector);
  const tvSeries = useSelector(tvSeriesSelector);

  // Except the nowPlaying movies
  const SUB_MOVIE_NAMES = Object.keys(movies).slice(1).sort();
  // tvSeries version
  const SUB_TV_NAMES = Object.keys(tvSeries).slice(0).sort();

  // because useState won't change value after the first rener
  // initial value is the first SUB_MOVIE_NAME alphabetically
  const [activeMovieCollection, setActiveMovieCollection] = useState('popular');
  // tvSeries version
  const [activeTvCollection, setActiveTvCollection] = useState('onTheAir');

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
      <MoviePageContainer>
        <NowPlayingSlider movies={movies.nowPlaying} />

        <ItemContext.Provider value="movie">
          <Collection
            header={{
              sectionName: 'Movies',
              subMenuNames: SUB_MOVIE_NAMES,
              activeMenu: activeMovieCollection,
              setActiveMenu: setActiveMovieCollection,
            }}
            collection={movies[activeMovieCollection]}
          />
        </ItemContext.Provider>

        <ItemContext.Provider value="tv">
          <Collection
            header={{
              sectionName: 'TV Series',
              subMenuNames: SUB_TV_NAMES,
              activeMenu: activeTvCollection,
              setActiveMenu: setActiveTvCollection,
            }}
            collection={tvSeries[activeTvCollection]}
          />
        </ItemContext.Provider>
      </MoviePageContainer>
    </MainLayout>
  );
}

const MoviePageContainer = styled.div`
  display: grid;
  row-gap: 2rem;
`;

export default MoviePage;
