import React from 'react';
import styled from 'styled-components/macro';
import CollectionItem from './CollectionItem';

function CollectionContent({ collection }) {
  return <Container>{renderItem({ collection })}</Container>;
}

function renderItem({ collection }) {
  return collection.map((item) => <CollectionItem key={item.id} item={item} />);
}

const Container = styled.div`
  display: grid;
  grid-template-columns: repeat(auto-fill, minmax(13rem, 1fr));

  gap: 1rem;
  font-size: 1.25rem;
`;

export default CollectionContent;