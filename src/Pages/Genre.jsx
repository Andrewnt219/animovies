import React, { useEffect, useMemo } from 'react';
import queryString from 'query-string';
import styled from 'styled-components/macro';
import { useParams, useLocation } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';

import MainLayout from 'HOC/MainLayout';
import Collection from 'Components/moviePage/Collection/Collection';
import {
  fetchGenre,
  genreIsLoadingSelector,
  genreCollectionSelector,
} from 'Features/genreSlice';

import PageIndicator from 'Components/genre/PageIndicator';
import GenreFilter from 'Components/genre/GenreFilter';

function Genre() {
  const dispatch = useDispatch();
  const { genreName, page } = useParams();

  const { search } = useLocation();
  const queries = useMemo(() => queryString.parse(search), [search]);

  const isLoading = useSelector(genreIsLoadingSelector);
  const { movies, tvSeries } = useSelector(genreCollectionSelector);

  useEffect(() => {
    dispatch(fetchGenre({ genreName, page, queries }));
  }, [dispatch, genreName, page, queries]);

  return (
    <MainLayout>
      <GenreName>{genreName}</GenreName>
      <GenreFilter />
      <PageIndicator />
      {isLoading ? (
        <div>Loading...</div>
      ) : (
        <>
          <Collection
            header={{
              sectionName: 'Movies',
            }}
            collection={movies}
          />
          <Collection
            header={{
              sectionName: 'TV Series',
            }}
            collection={tvSeries}
          />
        </>
      )}
    </MainLayout>
  );
}

const GenreName = styled.h1`
  text-align: center;
`;

export default Genre;
