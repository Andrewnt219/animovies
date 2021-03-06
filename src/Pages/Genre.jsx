import React, { useEffect, useMemo, useState } from 'react';
import queryString from 'query-string';
import styled from 'styled-components/macro';
import { useParams, useLocation, useHistory } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';
import _ from 'lodash';
import MainLayout from 'HOC/MainLayout';
import Collection from 'Components/moviePage/Collection/Collection';
import {
  fetchGenre,
  genreIsLoadingSelector,
  genreCollectionSelector,
  genreErrorSelector,
} from 'Features/genreSlice';

import BaseFilter from 'Components/genre/Filter/BaseFilter';
import FilterContext from 'Context/FilterContext';
import PageIndicator from 'Components/genre/PageIndicator';
import LoadingIndicator from 'Components/ui/LoadingIndicator/LoadingIndicator';
import useTitle from 'Hooks/useTitle';
import ErrorModal from 'Components/ui/ErrorModal';

function Genre() {
  const dispatch = useDispatch();
  const { genreName, page } = useParams();
  const history = useHistory();
  const { search } = useLocation();

  const isLoading = useSelector(genreIsLoadingSelector);
  const { movies, tvSeries, numberOfPages } = useSelector(
    genreCollectionSelector
  );

  const [showFilter, setShowFilter] = useState(false);
  const [filterConfig, setFilterConfig] = useState({});
  const queries = useMemo(
    () => ({ ...filterConfig, ...queryString.parse(search) }),
    [search, filterConfig]
  );

  useTitle(genreName);
  useEffect(() => {
    dispatch(fetchGenre({ genreName, page, queries }));
  }, [dispatch, genreName, page, queries]);

  // * handle filter configs change
  const handleChange = (event) => {
    const { name, value, checked } = event.target;

    setFilterConfig((prev) => {
      if (!checked) {
        return _.omit(prev, name);
      }

      return {
        ...prev,
        [name]: value,
      };
    });
  };

  const error = useSelector(genreErrorSelector);
  if (error) {
    return <ErrorModal>{error}</ErrorModal>;
  }

  return (
    <MainLayout>
      <Header>
        <GenreName>{isLoading ? <LoadingIndicator /> : genreName}</GenreName>
        <PageIndicator
          numberOfPages={numberOfPages}
          handleChange={(_, page) =>
            history.push(`/tmdb/discover/${genreName}/${page}`)
          }
          currentPageNumber={page}
        />

        <FilterContext.Provider
          value={{
            handleChange,
          }}
        >
          <BaseFilter
            filterSectionsObj={filterMap}
            showFilter={showFilter}
            handleClick={() => setShowFilter((prev) => !prev)}
          />
        </FilterContext.Provider>
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

const filterMap = {
  'Sort by': {
    queryKey: 'sort_by',
    type: 'radio',
    choices: [
      {
        label: 'Popularity descending',
        value: 'popularity.desc',
        defaultChecked: true,
        name: 'sort_by',
      },
      {
        label: 'Popularity ascending',
        value: 'popularity.asc',
        name: 'sort_by',
      },
      {
        label: 'Release date descending',
        value: 'release_date.desc',
        name: 'sort_by',
      },
      {
        label: 'Release date ascending',
        value: 'release_date.asc',
        name: 'sort_by',
      },
    ],
  },
  Year: {
    queryKey: 'primary_release_year',
    type: 'radio',
    choices: [
      {
        label: `${new Date().getFullYear()}`,
        value: `${new Date().getFullYear()}`,
        name: 'primary_release_year',
      },
      {
        label: `${new Date().getFullYear() - 1}`,
        value: `${new Date().getFullYear() - 1}`,
        name: 'primary_release_year',
      },
      {
        label: `${new Date().getFullYear() - 2}`,
        value: `${new Date().getFullYear() - 2}`,
        name: 'primary_release_year',
      },
      {
        label: `${new Date().getFullYear() - 3}`,
        value: `${new Date().getFullYear() - 3}`,
        name: 'primary_release_year',
      },
    ],
  },
};
export default Genre;
