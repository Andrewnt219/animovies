import React, { useEffect, useMemo } from 'react';
import MainLayout from 'HOC/MainLayout';
import Collection from 'Components/moviePage/Collection/Collection';
import {
  fetchGenre,
  genreIsLoadingSelector,
  genreCollectionSelector,
} from 'Features/genreSlice';
import { useParams, useLocation } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';
import FilterPanel from 'Components/genre/FilterPanel';
import PageIndicator from 'Components/genre/PageIndicator';
import queryString from 'query-string';

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

  return isLoading ? (
    <div>Loading...</div>
  ) : (
    <MainLayout>
      <FilterPanel />
      <PageIndicator />
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
      <PageIndicator />
    </MainLayout>
  );
}

export default Genre;
