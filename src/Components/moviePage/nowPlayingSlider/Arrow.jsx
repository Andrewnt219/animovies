/* --------------------------------- IMPORT --------------------------------- */
import React from 'react';
import PropTypes from 'prop-types';
import { FaArrowLeft, FaArrowRight } from 'react-icons/fa';
import styled, { css, withTheme } from 'styled-components/macro';
import { rgba } from 'polished';

/* --------------------------------- STYLING -------------------------------- */
const StyledArrowContainer = styled.div`
  ${(p) =>
    p.isLeftArrow
      ? css`
          left: 0;
        `
      : css`
          right: 0;
        `};

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

  &:hover {
    opacity: 0.5;
  }
`;

/* -------------------------------- COMPONENT ------------------------------- */
// NOTE renders left or right arrow, with background
function Arrow({ isLeftArrow, theme, handleClick }) {
  // * config the icon
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

/* -------------------------------- VALIDATE -------------------------------- */
Arrow.propTypes = {
  handleClick: PropTypes.func,
  isLeftArrow: PropTypes.bool,
  theme: PropTypes.shape({
    white: PropTypes.any,
  }),
};

export default withTheme(Arrow);
