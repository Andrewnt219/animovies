import React from 'react';
import styled from 'styled-components/macro';
import FilterChoice from './FilterChoice';

function FilterSection({ header, filterChoicesObj }) {
  return (
    <Container>
      <Header>{header}</Header>
      <FilterChoices>{renderFilterChoices(filterChoicesObj)}</FilterChoices>
    </Container>
  );
}

function renderFilterChoices(filterChoicesObj) {
  const { queryKey, type, choices } = filterChoicesObj;
  return choices.map(({ label, ...inputConfig }) => (
    <FilterChoice
      key={label}
      queryKey={queryKey}
      type={type}
      label={label}
      {...inputConfig}
    />
  ));
}

const Container = styled.div`
  display: grid;

  grid-template-columns: 1fr 2fr;
  column-gap: 1rem;
`;
const Header = styled.p`
  font-size: larger;
  display: flex;
  font-weight: bolder;
  align-items: center;
`;
const FilterChoices = styled.div`
  flex: 1;
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(15rem, 1fr));
  gap: 1rem;
`;

export default FilterSection;
