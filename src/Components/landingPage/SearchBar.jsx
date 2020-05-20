import React from 'react';
import Flex from 'Components/container/Flex';
import Input from 'Components/ui/Input';
import { MdSearch } from 'react-icons/md';
import styled, { withTheme } from 'styled-components/macro';

const StyledSearchBar = styled(Flex)`
  margin: 0 auto;
  position: fixed;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  width: 70%;
`;

const HEIGHT = '6rem';

const StyledSearchIcon = styled(MdSearch)`
  color: ${(p) => p.theme.white};
  scale: 3;
`;

const LandingInput = styled(Input)`
  flex: 1;
  border-radius: 0.5rem 0 0 0.5rem;
`;

const IconWrapper = styled(Flex)`
  height: ${HEIGHT};
  width: 30%;
  max-width: 10rem;
  background: ${(p) => p.theme.primary};
  box-sizing: border-box;
  border-radius: 0 0.5rem 0.5rem 0;
`;

function SearchBar() {
  return (
    <StyledSearchBar>
      <LandingInput height={HEIGHT} />
      <IconWrapper>
        <StyledSearchIcon />
      </IconWrapper>
    </StyledSearchBar>
  );
}

export default withTheme(SearchBar);
