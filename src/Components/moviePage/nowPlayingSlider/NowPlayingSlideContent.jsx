import React from 'react';
import styled from 'styled-components/macro';
import NowPlayingSlide from './NowPlayingSlide';

const StyledSlideContent = styled.div`
  display: flex;
  width: ${(p) => p.width}px;
  transform: translateX(-${(p) => p.translateX}px);
  transition: transform 300ms ease;
`;

function NowPlayingSlideContent({ movies, translateX }) {
  const slideContentWidth = window.innerWidth * movies.length;

  return (
    <StyledSlideContent width={slideContentWidth} translateX={translateX}>
      {renderedMovies(movies)}
    </StyledSlideContent>
  );
}

function renderedMovies(movies) {
  return movies.map((movie) => (
    <NowPlayingSlide key={movie.id} src={movie.backdrop_path} />
  ));
}

export default NowPlayingSlideContent;
