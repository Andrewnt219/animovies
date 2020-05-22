import React from 'react';
import styled, { css, withTheme } from 'styled-components/macro';
import Center from 'Components/container/Center';
import StyledLink from 'Components/navigation/StyledLink';

const BoldName = styled.div`
  display: inline-block;
  background-color: ${(p) => p.theme.primary};
  padding: 0 1rem;
  margin-right: 1rem;
  font-family: 'Pacifico', cursive;
  color: ${(p) => p.theme.white};
  border-radius: 1rem;
  font-weight: bold;
`;

const Container = styled(Center)`
  font-family: 'Pacifico', cursive;
  color: ${(p) => p.theme.white};
  display: flex;
  font-weight: bold;
  cursor: pointer;
  transition: opacity 150ms ease;

  &:hover {
    opacity: 0.9;
  }

  &,
  & > * {
    ${(p) => p.fontSize}
  }
`;

function Logo({ theme, className, size = '1rem' }) {
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
      <BoldName>ANI</BoldName>Movies
    </Container>
  );
}

export default withTheme(Logo);
