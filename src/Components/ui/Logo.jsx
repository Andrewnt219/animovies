import PropTypes from 'prop-types';
import React from 'react';
import styled, { css, withTheme } from 'styled-components/macro';
import StyledLink from 'Components/navigation/StyledLink';

const BoldName = styled.div`
  display: inline-block;
  padding: 0 1vw;
  height: min-content;
  margin-right: 0.5rem;
  font-family: 'Pacifico', cursive;
  border-radius: 4px;
  font-weight: bold;
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

const Container = styled.div`
  font-family: 'Pacifico', cursive;
  color: ${(p) => p.theme.white};
  display: flex;
  justify-content: center;
  align-items: center;
  font-weight: bold;
  cursor: pointer;
  transition: opacity 150ms ease;
  margin: 0;

  &:hover {
    opacity: 0.9;
  }

  &,
  & > * {
    ${(p) => p.fontSize}
  }
`;

function Logo({ theme, className, size = '1rem', isInverted }) {
  const fontSize = css`
    font-size: ${size};
  `;
  return (
    <Container
      className={className}
      to={{ pathname: `/${theme.name}` }}
      as={StyledLink}
      fontSize={fontSize}
    >
      <BoldName isInverted={isInverted}>ANI</BoldName>Movies
    </Container>
  );
}

Logo.propTypes = {
  className: PropTypes.string,
  isInverted: PropTypes.bool,
  size: PropTypes.string,
  theme: PropTypes.shape({
    name: PropTypes.any,
  }),
};

export default withTheme(Logo);
