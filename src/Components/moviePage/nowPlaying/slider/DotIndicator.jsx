import React from 'react';
import styled, { css } from 'styled-components/macro';
import Flex from 'Components/container/Flex';
import { rgba } from 'polished';

const DotsContainer = styled(Flex)`
  position: absolute;
  bottom: 0.5rem;
  left: 50%;
  transform: translate(-50%, -0.5rem);
  box-sizing: border-box;
  overflow: auto;
  width: 100%;
`;

const Dot = styled.div`
  cursor: pointer;
  border-radius: 100%;
  content: '';
  padding: ${(p) =>
    p.active
      ? css`clamp(0.5rem, 2vw, 1rem)`
      : css`clamp(0.25rem, 1vw, 0.5rem)`};
  background: ${(p) =>
    p.active ? p.theme.secondary : rgba(p.theme.secondary, 0.5)};
  margin: clamp(0.1rem, 0.5vw, 0.5rem);
`;

function DotIndicator({ movies, activeIdx, handleDotClick }) {
  return (
    <DotsContainer>
      {movies.map((movie, idx) => (
        <Dot
          key={movie.id}
          active={idx === activeIdx}
          onClick={() => handleDotClick(idx)}
        />
      ))}
    </DotsContainer>
  );
}

export default DotIndicator;
