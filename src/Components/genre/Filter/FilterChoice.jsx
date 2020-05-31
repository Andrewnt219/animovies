import React, { useContext } from 'react';
import styled from 'styled-components/macro';
import FilterContext from 'Context/FilterContext';

function FilterChoice({ queryKey, label, ...inputConfig }) {
  const { handleChange } = useContext(FilterContext);

  return (
    <Container>
      <Choice type="text" id={label} {...inputConfig} onChange={handleChange} />
      <ChoiceLabel htmlFor={label}>{label}</ChoiceLabel>
    </Container>
  );
}

const Container = styled.div`
  display: flex;
`;
const ChoiceLabel = styled.label`
  font-size: inherit;
  color: inherit;

  display: flex;
  align-items: center;

  &:hover {
    color: ${(p) => p.theme.primary};
  }
`;
const Choice = styled.input`
  margin-right: 1rem;
`;

export default FilterChoice;
