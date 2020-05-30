import React, { useContext } from 'react';
import styled from 'styled-components/macro';
import FilterContext from 'Context/FilterContext';

function FilterChoice({ queryKey, queryValue, label, ...inputConfig }) {
  const { handleChange } = useContext(FilterContext);

  return (
    <Container>
      <ChoiceLabel>{label}</ChoiceLabel>
      <Choice type="text" {...inputConfig} onChange={handleChange} />
    </Container>
  );
}

const Container = styled.div``;
const ChoiceLabel = styled.p``;
const Choice = styled.input``;

export default FilterChoice;
