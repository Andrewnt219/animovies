import React from 'react';
import styled from 'styled-components/macro';

import CollectionHeader from './CollectionHeader';
import CollectionItems from './CollectionItems';

function Collection({ header, collection }) {
  return (
    <Container>
      <CollectionHeader {...header} />
      <CollectionItems collection={collection} />
    </Container>
  );
}
const Container = styled.div`
  padding: 1rem;

  & > *:first-child {
    margin-bottom: min(5vw, 2rem);
  }
`;
export default Collection;
