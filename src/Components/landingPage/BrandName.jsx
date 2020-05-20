import React from 'react';
import styled, { css } from 'styled-components/macro';
import Center from 'Components/container/Center';
import StyledLink from 'Components/navigation/Link';
import { useLocation } from 'react-router-dom';
import { darken } from 'polished';

const fontSize = css`
  font-size: clamp(2rem, 7vw, 5rem);
`;
const BoldName = styled.div`
  display: inline-block;
  background-color: ${(p) => p.theme.primary};
  padding: 0 1rem;
  margin-right: 1rem;
  font-family: 'Pacifico', cursive;
  color: ${(p) => p.theme.secondary};
  border-radius: 1rem;
  ${fontSize};
  font-weight: bold;
`;

const Container = styled(Center)`
  font-family: 'Pacifico', cursive;
  color: ${(p) => p.theme.secondary};
  display: flex;
  ${fontSize};
  font-weight: bold;
  cursor: pointer;
  transition: opacity 150ms ease;

  &:hover {
    opacity: 0.9;
  }
`;

function BrandName() {
  const location = useLocation();
  return (
    <Container to={{ pathname: location.pathname + '/all' }} as={StyledLink}>
      <BoldName>ANI</BoldName>Movies
    </Container>
  );
}

export default BrandName;
