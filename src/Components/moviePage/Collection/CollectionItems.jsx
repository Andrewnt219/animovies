import React from 'react';
import styled from 'styled-components/macro';
import CollectionItem from './CollectionItem';

function CollectionItems({ collection }) {
  return <Container>{renderItem({ collection })}</Container>;
}

function renderItem({ collection }) {
  return collection.map((item) => <CollectionItem key={item.id} item={item} />);
}

const Container = styled.div`
  display: grid;
  grid-template-columns: repeat(auto-fill, minmax(13rem, 1fr));
  max-width: 100%;
  height: auto;

  gap: 1rem;
  font-size: 1.25rem;

  @media (min-width: ${(p) => p.theme.breakpoints.md}) {
    font-size: 1.75rem;
    grid-template-columns: repeat(auto-fill, minmax(18rem, 1fr));
  }
`;

export default CollectionItems;
