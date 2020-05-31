/* --------------------------------- IMPORT --------------------------------- */
import React from 'react';
import styled, { css } from 'styled-components/macro';
import { rgba } from 'polished';
import PropTypes from 'prop-types';

import Flex from 'Components/container/Flex';

/* --------------------------------- STYLING -------------------------------- */
const DotsContainer = styled(Flex)`
  position: absolute;
  top: 2rem;
  left: 50%;
  transform: translate(-50%, -0.5rem);

  width: 100%;

  overflow: auto;
`;

const Dot = styled.div`
  padding: ${(p) =>
    p.isActive
      ? css`clamp(0.5rem, 2vw, 1rem)`
      : css`clamp(0.25rem, 1vw, 0.5rem)`};
  background: ${(p) => (p.isActive ? p.theme.white : rgba(p.theme.white, 0.5))};

  margin: clamp(0.1rem, 0.5vw, 0.5rem);
  border-radius: 100%;

  transition: background 150ms ease-out;

  content: '';
  cursor: pointer;

  &:hover {
    background: ${(p) => p.theme.white};
  }
`;

/* -------------------------------- COMPONENT ------------------------------- */
// NOTE render an indicator shows the index of which slide is playing
function DotIndicator({ movies, activeIdx, handleDotClick }) {
  return (
    <DotsContainer>
      {movies.map((movie, idx) => (
        <Dot
          key={movie.id}
          isActive={idx === activeIdx}
          onClick={() => handleDotClick(idx)}
          title={movie.title}
        />
      ))}
    </DotsContainer>
  );
}

/* -------------------------------- VALIDATE -------------------------------- */
DotIndicator.propTypes = {
  activeIdx: PropTypes.number,
  handleDotClick: PropTypes.func,
  movies: PropTypes.array,
};

export default DotIndicator;
