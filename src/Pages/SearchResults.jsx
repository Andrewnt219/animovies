import React, { useEffect } from 'react';
import styled from 'styled-components/macro';
import { useLocation } from 'react-router-dom';
import queryString from 'query-string';
import { useDispatch, useSelector } from 'react-redux';
import MainLayout from 'HOC/MainLayout';
import Collection from 'Components/moviePage/Collection/Collection';

import PageIndicator from 'Components/genre/PageIndicator';
import {
  searchIsLoadingSelector,
  searchCollectionSelector,
  fetchSearch,
} from 'Features/searchSlice';

function SearchResults() {
  const dispatch = useDispatch();
  const { search } = useLocation();
  const { page, searchTerm } = queryString.parse(search);

  const isLoading = useSelector(searchIsLoadingSelector);
  const { movies, tvSeries, numberOfPages } = useSelector(
    searchCollectionSelector
  );

  useEffect(() => {
    dispatch(fetchSearch({ searchTerm, page }));
  }, [dispatch, searchTerm, page]);

  return (
    <MainLayout>
      <Header>
        <GenreName>Results for "{searchTerm}"</GenreName>
        <PageIndicator numberOfPages={numberOfPages} />
      </Header>
      {isLoading && <div>Loading...</div>}
      {movies.length !== 0 && (
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

const Header = styled.div`
  display: grid;
  grid-template-areas:
    'genreName      genreName'
    'pageIndicator  filter';
  row-gap: 2rem;
  padding: 1rem;
`;
const GenreName = styled.h1`
  grid-area: genreName;
  text-align: center;
  font-size: xx-large;
`;

export default SearchResults;
