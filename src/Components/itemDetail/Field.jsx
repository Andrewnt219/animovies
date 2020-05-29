import React from 'react';
import styled from 'styled-components/macro';

function Field({ title, children }) {
  return (
    <Container>
      <FieldLabel>{title}</FieldLabel>
      <FieldValue>{children}</FieldValue>
    </Container>
  );
}

const Container = styled.div`
  display: grid;
  grid-template-columns: max-content auto;
`;
const FieldLabel = styled.div`
  font-weight: bolder;
  margin-right: 0.5rem;

  ::after {
    content: ':';
  }
`;
const FieldValue = styled.div``;
export default Field;
