import React from 'react';
import BaseFilter from './Filter/BaseFilter';

function GenreFilter() {
  return <BaseFilter filterSectionsObj={filterMap}></BaseFilter>;
}

const filterMap = {
  'Sort by': {
    queryKey: 'sort_by',
    type: 'radio',
    choices: [
      {
        label: 'Popularity descending',
        queryValue: 'popularity.desc',
        defaultChecked: true,
        name: 'sort_by',
      },
      {
        label: 'Popularity ascending',
        queryValue: 'popularity.asc',
        name: 'sort_by',
      },
      {
        label: 'Release date descending',
        queryValue: 'release_date.desc',
        name: 'sort_by',
      },
      {
        label: 'Release date ascending',
        queryValue: 'release_date.asc',
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
        name: 'primary_release_year',
      },
      {
        label: `${new Date().getFullYear() - 1}`,
        name: 'primary_release_year',
      },
      {
        label: `${new Date().getFullYear() - 2}`,
        name: 'primary_release_year',
      },
      {
        label: `${new Date().getFullYear() - 3}`,
        name: 'primary_release_year',
      },
    ],
  },
};

export default GenreFilter;
