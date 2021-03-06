/* --------------------------------- IMPORT --------------------------------- */
import React, { useState } from 'react';
import styled from 'styled-components/macro';

import {
  fetchCollection,
  collectionIsLoadingSelector,
  collectionsSelector,
  collectionErrorSelector,
} from 'Features/collectionSlice';

import NowPlayingSlider from 'Components/moviePage/nowPlayingSlider/NowPlayingSlider';
import MainLayout from 'HOC/MainLayout';
import Collection from 'Components/moviePage/Collection/Collection';
import ItemContext from 'Context/ItemContext';
import { useFetch } from 'Hooks/useFetch';
import { motion } from 'framer-motion';
import LoadingIndicator from 'Components/ui/LoadingIndicator/LoadingIndicator';
import useTitle from 'Hooks/useTitle';
import { useSelector } from 'react-redux';
import ErrorModal from 'Components/ui/ErrorModal';

/* -------------------------------- COMPONENT ------------------------------- */
// NOTE Render the page at /all
function MoviePage() {
  const [{ movies, tvSeries }, isLoading] = useFetch(
    fetchCollection,
    collectionsSelector,
    collectionIsLoadingSelector
  );

  // Except the nowPlaying movies
  const MOVIE_MENUS = extractSubCollection(movies);
  // tvSeries version
  const TV_MENUS = extractSubCollection(tvSeries);

  // because useState won't change value after the first rener
  // initial value is the first SUB_MOVIE_NAME alphabetically
  const [activeMovieCollection, setActiveMovieCollection] = useState('popular');
  // tvSeries version
  const [activeTvCollection, setActiveTvCollection] = useState('onTheAir');

  useTitle('All movies');

  const error = useSelector(collectionErrorSelector);
  if (error) {
    return <ErrorModal>{error}</ErrorModal>;
  }

  return isLoading ? (
    <LoadingIndicator />
  ) : (
    <MainLayout>
      <MoviePageContainer>
        <NowPlayingSlider movies={movies.nowPlaying} />

        <ItemContext.Provider value="movie">
          <Collection
            header={{
              sectionName: 'Movies',
              subMenuNames: MOVIE_MENUS.slice(1),
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
              subMenuNames: TV_MENUS,
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

const MoviePageContainer = styled(motion.div)`
  display: grid;
  row-gap: 2rem;
`;

function extractSubCollection(collection) {
  return Object.keys(collection).sort();
}

export default MoviePage;
