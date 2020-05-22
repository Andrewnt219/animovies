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
   * Arrow Controllers
   */
  const nextSlide = React.useCallback(() => {
    setActiveSlideIdx((prevActiveSlide) =>
      prevActiveSlide === lastMovieIndex ? 0 : prevActiveSlide + 1
    );
    setTransitionValue(
      activeSlideIdx === lastMovieIndex
        ? 0
        : _getTransitionValue(activeSlideIdx + 1)
    );
  }, [activeSlideIdx, lastMovieIndex]);
  const prevSlide = React.useCallback(() => {
    if (activeSlideIdx === 0) {
      setActiveSlideIdx(lastMovieIndex);
      setTransitionValue(_getTransitionValue(lastMovieIndex));
    }
    setActiveSlideIdx((prevActiveSlide) =>
      prevActiveSlide === 0 ? lastMovieIndex : prevActiveSlide - 1
    );

    setTransitionValue(
      activeSlideIdx === 0
        ? _getTransitionValue(lastMovieIndex)
        : _getTransitionValue(activeSlideIdx - 1)
    );
  }, [activeSlideIdx, lastMovieIndex]);

  /**
   * Dot Controller
   */
  const handleDotClick = React.useCallback((idx) => {
    setActiveSlideIdx(idx);
    setTransitionValue(idx * window.innerWidth);
  }, []);

  return (
    <StyledSlider>
      <NowPlayingSlideContent
        movies={movies}
        activeSlide={activeSlideIdx}
        translateX={transitionValue}
      />
      <Arrow isLeftArrow handleClick={prevSlide} />
      <Arrow handleClick={nextSlide} />
      <DotIndicator
        movies={movies}
        activeIdx={activeSlideIdx}
        handleDotClick={handleDotClick}
      />
    </StyledSlider>
  );
}

/**
 * Helpers
 */
function _getTransitionValue(slideIdx) {
  return slideIdx * window.innerWidth;
}

export default NowPlayingSlider;
