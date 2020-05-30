import React from 'react';
import styled from 'styled-components/macro';

function FilterChoice({ queryKey, queryValue, label, ...inputConfig }) {
  return (
    <Container>
      <ChoiceLabel>{label}</ChoiceLabel>
      <Choice type="text" {...inputConfig} />
    </Container>
  );
}

const Container = styled.div``;
const ChoiceLabel = styled.p``;
const Choice = styled.input``;

export default FilterChoice;
