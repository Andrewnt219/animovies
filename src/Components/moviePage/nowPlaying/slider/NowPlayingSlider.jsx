import styled from 'styled-components/macro';
import React, { useState } from 'react';
import NowPlayingSlideContent from './NowPlayingSlideContent';
import Arrow from './Arrow';
import DotIndicator from './DotIndicator';

const StyledSlider = styled.div`
  position: relative;
  overflow-x: hidden;
`;

function NowPlayingSlider({ movies }) {
  /**
   * States
   */
  const [activeSlideIdx, setActiveSlideIdx] = useState(0);
  const [transitionValue, setTransitionValue] = useState(0);

  /**
   * Variables
   */
  const noOfMovies = movies.length;
  const lastMovieIndex = noOfMovies - 1;

  /**
   * Slide Controllers
   */
  const nextSlide = React.useCallback(() => {
    setActiveSlideIdx((prevActiveSlide) =>
      prevActiveSlide === lastMovieIndex ? 0 : prevActiveSlide + 1
    );
    setTransitionValue(
      activeSlideIdx === lastMovieIndex
        ? 0
        : (activeSlideIdx + 1) * window.innerWidth
    );
  }, [activeSlideIdx, lastMovieIndex]);
  const prevSlide = React.useCallback(() => {
    setActiveSlideIdx((prevActiveSlide) =>
      prevActiveSlide === 0 ? lastMovieIndex : prevActiveSlide - 1
    );
    setTransitionValue(
      activeSlideIdx === 0
        ? lastMovieIndex * window.innerWidth
        : (activeSlideIdx - 1) * window.innerWidth
    );
  }, [activeSlideIdx, lastMovieIndex]);

  return (
    <StyledSlider>
      <NowPlayingSlideContent
        movies={movies}
        activeSlide={activeSlideIdx}
        translateX={transitionValue}
      />
      <Arrow isLeftArrow handleClick={prevSlide} />
      <Arrow handleClick={nextSlide} />
      <DotIndicator movies={movies} activeIdx={activeSlideIdx} />
    </StyledSlider>
  );
}

export default NowPlayingSlider;
