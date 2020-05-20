import React from 'react';
import styled, { css } from 'styled-components/macro';
import Center from 'Components/container/Center';

const fontSize = css`
  font-size: clamp(2rem, 7vw, 5rem);
`;
const StyledDiv = styled.div`
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

const LandingCenter = styled(Center)`
  font-family: 'Pacifico', cursive;
  color: ${(p) => p.theme.secondary};
  display: flex;
  ${fontSize};
  font-weight: bold;
`;

function BrandName() {
  return (
    <LandingCenter>
      <StyledDiv>ANI</StyledDiv>Movies
    </LandingCenter>
  );
}

export default BrandName;
