/* --------------------------------- IMPORT --------------------------------- */
import PropTypes from 'prop-types';
import React from 'react';
import styled from 'styled-components/macro';

import NowPlayingSlide from './NowPlayingSlide';

/* --------------------------------- STYLING -------------------------------- */
const StyledSlideContent = styled.div`
  display: flex;
  width: ${(p) => p.width}px;
  transform: translateX(-${(p) => p.translateX}px);
  transition: transform 300ms ease;
`;

/* -------------------------------- COMPONENT ------------------------------- */
// NOTE renders the container for content of the slider
function NowPlayingSlideContent({ movies, translateX }) {
  const slideContentWidth = window.innerWidth * movies.length;

  return (
    <StyledSlideContent width={slideContentWidth} translateX={translateX}>
      {renderedMovies(movies)}
    </StyledSlideContent>
  );
}

/* --------------------------------- HELPERS -------------------------------- */
// NOTE renders slides of nowplaying movies
function renderedMovies(movies) {
  return movies.map((movie) => <NowPlayingSlide key={movie.id} item={movie} />);
}

/* -------------------------------- VALIDATE -------------------------------- */
NowPlayingSlideContent.propTypes = {
  movies: PropTypes.array,
  translateX: PropTypes.number,
};

export default NowPlayingSlideContent;
