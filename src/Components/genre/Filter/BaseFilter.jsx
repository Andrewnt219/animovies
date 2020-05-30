import React from 'react';
import styled, { keyframes, css } from 'styled-components/macro';
import { MdFilterList } from 'react-icons/md';
import FilterSection from './FilterSection';
import { darken } from 'polished';

function BaseFilter({ showFilter, filterSectionsObj, handleClick }) {
  return (
    <Container>
      <IconWrapper onClick={handleClick} active={showFilter}>
        <MdFilterList />
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

const Container = styled.div``;

const rotate = keyframes`
  from {
    transform: rotate(0deg);
  }

  to {
    transform: rotate(360deg);
  }
`;
const IconWrapper = styled.h1`
  cursor: pointer;
  background: ${(p) => p.theme.primary};
  border-radius: 100%;
  display: flex;
  justify-content: center;
  align-items: center;

  &:hover {
    background: ${(p) => darken(0.1, p.theme.primary)};
  }

  ${(p) =>
    p.active &&
    css`
      animation: ${rotate} 2s ease infinite;
    `}

  & > * {
    height: 100%;
    width: 100%;
  }
`;
const FilterSections = styled.div``;

export default BaseFilter;
