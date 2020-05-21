import React from 'react';
import styled from 'styled-components/macro';
import NowPlayingSlide from './NowPlayingSlide';

const StyledSlideContent = styled.div`
  display: flex;
  width: ${(p) => p.width}px;
`;

function NowPlayingSlideContent({ movies }) {
  const width = window.innerWidth * movies.length;
  return (
    <StyledSlideContent width={width}>
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
