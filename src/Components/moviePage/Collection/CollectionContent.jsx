import React from 'react';
import styled from 'styled-components/macro';
import { rgba } from 'polished';

function CollectionContent({ collection }) {
  return <Container>{renderItem(collection)}</Container>;
}

function renderItem(collection) {
  return collection.map((item) => (
    <ItemContainer key={item.id}>
      <ItemImg src={item.poster_path} alt="movie_poster" />
      <ItemTitle>{item.title}</ItemTitle>
    </ItemContainer>
  ));
}

const Container = styled.div`
  display: grid;
  grid-template-columns: repeat(auto-fill, minmax(10rem, 1fr));
  gap: 1rem;
  font-size: 1.25rem;
`;

const ItemContainer = styled.div.attrs({
  // optimizes img rendering
  width: '10rem',
  height: '18rem',
})`
  position: relative;

  &:hover {
    /* Backdrop */
    &::before {
      content: '';
      display: block;
      width: 100%;
      height: 100%;

      position: absolute;
      top: 0;
      left: 0;
      background: ${(p) => rgba(p.theme.black, 0.7)};
    }

    /* Info Button Container */
    &::after {
      content: 'ℹ';
      position: absolute;
      top: 50%;
      left: 50%;
      transform: translate(-50%, -50%);

      display: flex;
      justify-content: center;
      align-items: center;

      width: 5rem;
      height: 5rem;
      border-radius: 100%;
      background-color: ${(p) => p.theme.primary};
      box-shadow: 0 2px 2px black;

      color: ${(p) => p.theme.white};
      font-size: 3rem;
    }
  }
`;
const ItemImg = styled.img`
  max-width: 100%;
  height: 100%;
`;
const ItemTitle = styled.p`
  position: absolute;
  bottom: 0;
  left: 0;

  text-align: center;
  color: ${(p) => p.theme.white};
  font-weight: bold;
  font-size: inherit;

  width: 100%;
  background: linear-gradient(to top, black 20%, transparent 100%);
  padding-bottom: 0.25rem;
`;

export default CollectionContent;
