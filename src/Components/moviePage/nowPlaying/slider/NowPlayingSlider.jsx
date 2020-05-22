import styled from 'styled-components/macro';
import React, { useState } from 'react';
import NowPlayingSlideContent from './NowPlayingSlideContent';
import Arrow from './Arrow';

const StyledSlider = styled.div`
  position: relative;
  overflow-x: hidden;
`;

function NowPlayingSlider({ movies }) {
  /**
   * States
   */
  const [activeSlide, setActiveSlide] = useState(0);
  const [transitionValue, setTransitionValue] = useState(0);

  /**
   * Slide Controllers
   */
  const nextSlide = React.useCallback(() => {
    setActiveSlide((prevActiveSlide) =>
      prevActiveSlide === movies.length - 1 ? 0 : prevActiveSlide + 1
    );
    setTransitionValue(
      activeSlide === movies.length - 1
        ? 0
        : (activeSlide + 1) * window.innerWidth
    );
  }, [activeSlide, movies.length]);
  const prevSlide = React.useCallback(() => {
    setActiveSlide((prevActiveSlide) =>
      prevActiveSlide === 0 ? movies.length - 1 : prevActiveSlide - 1
    );
    setTransitionValue(
      activeSlide === 0
        ? (movies.length - 1) * window.innerWidth
        : (activeSlide - 1) * window.innerWidth
    );
  }, [activeSlide, movies.length]);

  return (
    <StyledSlider>
      <NowPlayingSlideContent
        movies={movies}
        activeSlide={activeSlide}
        translateX={transitionValue}
      />
      <Arrow isLeftArrow handleClick={prevSlide} />
      <Arrow handleClick={nextSlide} />
    </StyledSlider>
  );
}

export default NowPlayingSlider;
