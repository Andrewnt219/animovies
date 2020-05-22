import styled from 'styled-components/macro';
import React, { useReducer, useEffect, useRef } from 'react';
import NowPlayingSlideContent from './NowPlayingSlideContent';
import Arrow from './Arrow';
import DotIndicator from './DotIndicator';
import PropTypes from 'prop-types';

const StyledSlider = styled.div`
  position: relative;
  overflow-x: hidden;
`;

/**
 * Reducer
 */
function initCurrentSlide(movies) {
  return {
    index: 0,
    transitionValue: 0,
    lastMovieIndex: movies.length - 1,
  };
}
const currentSlideReducer = (state, { type, payload }) => {
  switch (type) {
    case 'NEXT_SLIDE':
      // Skip this autoplay interval
      window.clearInterval(payload?.autoPlayTimer);

      // Loop back to the first slide from the final slide
      if (state.index === state.lastMovieIndex) {
        return {
          ...state,
          index: 0,
          transitionValue: 0,
        };
      }

      // Go to next slide
      return {
        ...state,
        index: state.index + 1,
        transitionValue: _getTransitionValue(state.index + 1),
      };

    case 'PREV_SLIDE':
      // Skip this autoplay interval
      window.clearInterval(payload?.autoPlayTimer);

      // Go to the final slide from the first slide
      if (state.index === 0) {
        return {
          ...state,
          index: state.lastMovieIndex,
          transitionValue: _getTransitionValue(state.lastMovieIndex),
        };
      }

      // Go the the previous slide
      return {
        ...state,
        index: state.index - 1,
        transitionValue: _getTransitionValue(state.index - 1),
      };

    case 'DOT_CLICKED':
      // Skip this autoplay interval
      window.clearInterval(payload.autoPlayTimer);

      // Go to the selected slide
      return {
        ...state,
        index: payload.index,
        transitionValue: _getTransitionValue(payload.index),
      };

    // Probably action's name typo
    default:
      throw new Error('UNKNOWN SLIDE ACTION');
  }
};

function NowPlayingSlider({ movies, autoPlayInMs = 3000 }) {
  /**
   * States
   */
  const [currentSlide, dispatchCurrentSlide] = useReducer(
    currentSlideReducer,
    movies,
    initCurrentSlide
  );

  /**
   * Refs
   */
  const autoPlayTimer = useRef();

  /**
   * side-effects
   */
  // Set autoplay interval on every renders
  useEffect(() => {
    // If autoplay is set
    if (autoPlayInMs) {
      // Intervally go to the next slide
      autoPlayTimer.current = setInterval(() => {
        // Tracking if there is memory leak
        console.log('SLIDER_INTERVAL');

        // Go to the next slide
        dispatchCurrentSlide({ type: 'NEXT_SLIDE' });
      }, autoPlayInMs);
    }

    // Clearing up timer
    return () => {
      window.clearInterval(autoPlayTimer.current);
    };
  });

  return (
    <StyledSlider>
      <NowPlayingSlideContent
        movies={movies}
        activeSlide={currentSlide.index}
        translateX={currentSlide.transitionValue}
      />

      <Arrow
        isLeftArrow
        handleClick={() =>
          dispatchCurrentSlide({
            type: 'PREV_SLIDE',
            payload: { autoPlayTimer: autoPlayTimer.current },
          })
        }
      />
      <Arrow
        handleClick={() =>
          dispatchCurrentSlide({
            type: 'NEXT_SLIDE',
            payload: { autoPlayTimer: autoPlayTimer.current },
          })
        }
      />

      <DotIndicator
        movies={movies}
        activeIdx={currentSlide.index}
        handleDotClick={(index) =>
          dispatchCurrentSlide({
            type: 'DOT_CLICKED',
            payload: { index, autoPlayTimer: autoPlayTimer.current },
          })
        }
      />
    </StyledSlider>
  );
}

/**
 * Helpers
 */

// Calc transitionValue base on window.innerWidth
function _getTransitionValue(slideIdx) {
  return slideIdx * window.innerWidth;
}

export default NowPlayingSlider;
