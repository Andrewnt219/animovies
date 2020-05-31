import React, { useEffect } from 'react';
import styled from 'styled-components/macro';
import { useLocation, useHistory } from 'react-router-dom';
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
import LoadingIndicator from 'Components/ui/LoadingIndicator/LoadingIndicator';
import useTitle from 'Hooks/useTitle';

function SearchResults() {
  const dispatch = useDispatch();
  const history = useHistory();
  const { search } = useLocation();
  const { page, searchTerm } = queryString.parse(search);

  const isLoading = useSelector(searchIsLoadingSelector);
  const { movies, tvSeries, numberOfPages } = useSelector(
    searchCollectionSelector
  );
  useTitle(`Search "${searchTerm}"`);
  useEffect(() => {
    dispatch(fetchSearch({ searchTerm, page }));
  }, [dispatch, searchTerm, page]);

  const handleChange = (_, page) =>
    history.push(`/tmdb/search?searchTerm=${searchTerm}&page=${page}`);

  return (
    <MainLayout>
      <Header>
        <GenreName>
          {isLoading ? <LoadingIndicator /> : `Results for "${searchTerm}"`}
        </GenreName>
        <PageIndicator
          handleChange={handleChange}
          numberOfPages={numberOfPages}
          currentPageNumber={page}
        />
      </Header>

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
  display: flex;
  justify-content: center;
  align-items: center;
  font-size: xx-large;
`;

export default SearchResults;
