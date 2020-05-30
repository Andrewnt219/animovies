import React from 'react';
import styled from 'styled-components/macro';
import { MdFilterList } from 'react-icons/md';
import FilterSection from './FilterSection';

function BaseFilter({ showFilter, filterSectionsObj }) {
  return (
    <Container>
      <Header>
        Filter <MdFilterList />
      </Header>
      <FilterSections>{renderFilterList(filterSectionsObj)}</FilterSections>
    </Container>
  );
}

function renderFilterList(filterSectionsObj) {
  const filterSectionsArray = Object.entries(filterSectionsObj);

  return filterSectionsArray.map(([sectionName, sectionChoicesObj]) => (
    <FilterSection
      key={sectionName}
      header={sectionName}
      filterChoicesObj={sectionChoicesObj}
    />
  ));
}

const Container = styled.div``;
const Header = styled.h1``;
const FilterSections = styled.div``;
export default BaseFilter;
