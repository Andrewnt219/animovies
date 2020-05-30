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

const Container = styled.div``;
const Header = styled.h1``;
const FilterChoices = styled.div``;

export default FilterSection;
