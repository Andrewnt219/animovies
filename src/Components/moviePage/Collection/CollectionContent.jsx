import React from 'react';
import styled from 'styled-components/macro';

function CollectionContent({ collection }) {
  return <Container>{renderItem(collection)}</Container>;
}

function renderItem(collection) {
  return collection.map((item) => <Item key={item.id}>{item.title}</Item>);
}

const Container = styled.div`
  display: grid;
`;

const Item = styled.div``;

export default CollectionContent;
