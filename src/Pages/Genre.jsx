import React, { useEffect, useMemo, useState } from 'react';
import queryString from 'query-string';
import styled from 'styled-components/macro';
import { useParams, useLocation } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';
import _ from 'lodash';
import MainLayout from 'HOC/MainLayout';
import Collection from 'Components/moviePage/Collection/Collection';
import {
  fetchGenre,
  genreIsLoadingSelector,
  genreCollectionSelector,
} from 'Features/genreSlice';

import PageIndicator from 'Components/genre/PageIndicator';
import BaseFilter from 'Components/genre/Filter/BaseFilter';
import FilterContext from 'Context/FilterContext';

function Genre() {
  const dispatch = useDispatch();
  const { genreName, page } = useParams();

  const { search } = useLocation();

  const isLoading = useSelector(genreIsLoadingSelector);
  const { movies, tvSeries } = useSelector(genreCollectionSelector);

  const [showFilter, setShowFilter] = useState(false);
  const [filterConfig, setFilterConfig] = useState({});
  const queries = useMemo(
    () => ({ ...filterConfig, ...queryString.parse(search) }),
    [search, filterConfig]
  );

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

  return (
    <MainLayout>
      <GenreName>{genreName}</GenreName>
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
