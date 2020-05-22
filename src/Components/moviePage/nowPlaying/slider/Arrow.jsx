import { FaArrowLeft, FaArrowRight } from 'react-icons/fa';
import styled, { css, withTheme } from 'styled-components/macro';
import React from 'react';
import { rgba } from 'polished';

const StyledArrowContainer = styled.div`
  position: absolute;
  top: 0;
  height: 100%;
  padding: 1rem;
  background: ${(p) => rgba(p.theme.white, 0.1)};
  transition: all 200ms ease;
  display: flex;
  justify-content: center;
  align-items: center;
  cursor: pointer;
  opacity: 0.1;
  box-sizing: border-box;

  ${(p) =>
    p.isLeftArrow
      ? css`
          left: 0;
        `
      : css`
          right: 0;
        `};

  &:hover {
    opacity: 0.5;
  }

  &:active {
    transform: translateY(4px);
  }
`;

function Arrow({ isLeftArrow, theme, handleClick }) {
  const arrowConfig = {
    size: 'clamp(3rem, 5vw, 5rem)',
    color: theme.white,
  };
  return (
    <StyledArrowContainer isLeftArrow={isLeftArrow} onClick={handleClick}>
      {isLeftArrow ? (
        <FaArrowLeft {...arrowConfig} />
      ) : (
        <FaArrowRight {...arrowConfig} />
      )}
    </StyledArrowContainer>
  );
}

export default withTheme(Arrow);
