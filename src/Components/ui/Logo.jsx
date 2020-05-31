/* --------------------------------- IMPORT --------------------------------- */
import PropTypes from 'prop-types';
import React from 'react';
import styled, { css } from 'styled-components/macro';

import StyledNavLink from 'Components/navigation/StyledNavLink.jsx';

/* -------------------------------- COMPONENT ------------------------------- */
// NOTE render styled Logo
// * size is for sync font-size
function Logo({ className, size = '1rem', isInverted }) {
  const FONT_SIZE = css`
    font-size: ${size};
  `;

  return (
    <Container
      className={className}
      to="/tmdb/all"
      as={StyledNavLink}
      fontSize={FONT_SIZE}
    >
      <BoldName isInverted={isInverted}>ANI</BoldName>Movies
    </Container>
  );
}

/* --------------------------------- STYLING -------------------------------- */
// NOTE the emphasis characters of the Logo
const BoldName = styled.div`
  display: inline-block;
  padding: 0 1vw;
  height: min-content;
  margin-right: 0.5rem;
  font-family: 'Pacifico', cursive;
  border-radius: 4px;
  font-weight: bold;

  /* Inverts the color primary/white of the emphasis characters */
  ${(p) =>
    p.isInverted
      ? css`
          background-color: ${(p) => p.theme.white};
          color: ${(p) => p.theme.primary};
        `
      : css`
          background-color: ${(p) => p.theme.primary};
          color: ${(p) => p.theme.white};
        `}
`;

// NOTE the container for Logo
const Container = styled.div`
  &,
  & > * {
    ${(p) => p.fontSize}
  }

  font-family: 'Pacifico', cursive;
  color: ${(p) => p.theme.white};
  display: flex;
  justify-content: center;
  align-items: center;
  font-weight: bold;
  cursor: pointer;
  transition: opacity 150ms ease;
  margin: 0;

  /* StyledLink legacy */
  /* margin: 0 0.5rem; */
  padding: 1rem;
  font-size: 1.5rem;
  border-radius: 4px;

  &:hover {
    opacity: 0.9;
  }
`;

/* -------------------------------- VALIDATE -------------------------------- */
Logo.propTypes = {
  className: PropTypes.string,
  isInverted: PropTypes.bool,
  size: PropTypes.string,
  theme: PropTypes.shape({
    name: PropTypes.string,
  }),
};

export default Logo;
