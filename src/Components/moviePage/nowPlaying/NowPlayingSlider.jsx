import styled from 'styled-components/macro';
import React, { useState } from 'react';
import NowPlayingSlideContent from './NowPlayingSlideContent';

const StyledSlider = styled.div``;

function NowPlayingSlider({ movies }) {
  const [activeSlide, setActiveSlide] = useState(1);

  return (
    <StyledSlider>
      <NowPlayingSlideContent movies={movies} activeSlide={activeSlide} />
    </StyledSlider>
  );
}

export default NowPlayingSlider;
