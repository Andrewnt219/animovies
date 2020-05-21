import { FaArrowLeft, FaArrowRight } from 'react-icons/fa';
import styled, { css, withTheme } from 'styled-components/macro';
import React from 'react';

const StyledArrowContainer = styled.div`
  position: fixed;
  height: 100%;
  width: max-content;
  padding: 1rem;
  background: ${(p) => p.theme.black};
  box-shadow: ${(p) => !p.isLeftArrow && '-'}4px 0 4px ${(p) => p.theme.black};
  display: flex;
  justify-content: center;
  align-items: center;
  cursor: pointer;
  opacity: 0.1;

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

function Arrow({ isLeftArrow, theme }) {
  const arrowConfig = {
    size: '5rem',
    color: theme.white,
  };
  return (
    <StyledArrowContainer isLeftArrow={isLeftArrow}>
      {isLeftArrow ? (
        <FaArrowLeft {...arrowConfig} />
      ) : (
        <FaArrowRight {...arrowConfig} />
      )}
    </StyledArrowContainer>
  );
}

export default withTheme(Arrow);
