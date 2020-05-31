import React from 'react';
import styled from 'styled-components/macro';
import { MdFilterList } from 'react-icons/md';
import FilterSection from './FilterSection';

function BaseFilter({ showFilter, filterSectionsObj, handleClick }) {
  return (
    <Container>
      <IconWrapper onClick={handleClick} active={showFilter}>
        <MdFilterList size="clamp(1.25rem, 2vw, 2rem)" />
      </IconWrapper>
      {showFilter && (
        <FilterSections>{renderFilterList(filterSectionsObj)}</FilterSections>
      )}
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

const Container = styled.div`
  grid-area: filter;
  justify-self: flex-end;
  position: relative;
  z-index: ${(p) => p.theme.zIndex.low};
`;

const IconWrapper = styled.div`
  grid-area: icon;
  cursor: pointer;
  background: ${(p) => p.theme.dark};
  display: flex;
  justify-content: center;
  align-items: center;

  padding: 0.5rem 1rem;

  &:hover {
    filter: brightness(0.9);
  }
`;
const FilterSections = styled.div`
  position: absolute;
  right: 0;

  grid-area: section;
  display: grid;
  row-gap: 2rem;
  font-size: min(3vw, 1.5rem);
  padding: 2rem;
  background: ${(p) => p.theme.black};
  width: 100vw;
  box-shadow: 0 2px 2px #000;
`;

export default BaseFilter;
