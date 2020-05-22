import styled from 'styled-components/macro';
import React, { useReducer, useEffect, useRef } from 'react';
import NowPlayingSlideContent from './NowPlayingSlideContent';
import Arrow from './Arrow';
import DotIndicator from './DotIndicator';

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
      if (state.index === state.lastMovieIndex) {
        return {
          ...state,
          index: 0,
          transitionValue: 0,
        };
      }
      return {
        ...state,
        index: state.index + 1,
        transitionValue: _getTransitionValue(state.index + 1),
      };

    case 'PREV_SLIDE':
      if (state.index === 0) {
        return {
          ...state,
          index: state.lastMovieIndex,
          transitionValue: _getTransitionValue(state.lastMovieIndex),
        };
      }

      return {
        ...state,
        index: state.index - 1,
        transitionValue: _getTransitionValue(state.index - 1),
      };

    case 'DOT_CLICKED':
      window.clearInterval(payload.timerId);
      return {
        ...state,
        index: payload.index,
        transitionValue: _getTransitionValue(payload.index),
        timerId: null,
      };

    default:
      throw new Error('UNKNOWN SLIDE ACTION');
  }
};

function NowPlayingSlider({ movies, autoPlay: autoPlayInMs = 3000 }) {
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
  const timerId = useRef();

  useEffect(() => {
    if (autoPlayInMs) {
      timerId.current = setInterval(() => {
        console.log('SLIDER_INTERVAL');
        dispatchCurrentSlide({ type: 'NEXT_SLIDE' });
      }, autoPlayInMs);
    }

    return () => {
      window.clearInterval(timerId.current);
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
        handleClick={() => dispatchCurrentSlide({ type: 'PREV_SLIDE' })}
      />
      <Arrow handleClick={() => dispatchCurrentSlide({ type: 'NEXT_SLIDE' })} />

      <DotIndicator
        movies={movies}
        activeIdx={currentSlide.index}
        handleDotClick={(index) =>
          dispatchCurrentSlide({
            type: 'DOT_CLICKED',
            payload: { index, timerId: timerId.current },
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
