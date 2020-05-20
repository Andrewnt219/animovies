import React from 'react';
import Flex from 'Components/container/Flex';
import Input from 'Components/ui/Input';
import { MdSearch } from 'react-icons/md';
import styled, { withTheme } from 'styled-components/macro';

const HEIGHT = '5rem';

const StyledSearchIcon = styled(MdSearch)`
  color: ${(p) => p.theme.white};
  scale: 3;
  position: relative;
`;

const LandingInput = styled(Input)`
  flex: 1;
  border-radius: 0.5rem 0 0 0.5rem;
  font-size: max(2vw, 1.5rem);
`;

const IconWrapper = styled(Flex).attrs({ type: 'submit' })`
  height: ${HEIGHT};
  width: min(30%, 10rem);
  min-width: 5rem;
  background: ${(p) => p.theme.primary};
  box-sizing: border-box;
  border-radius: 0 0.5rem 0.5rem 0;
  border: 0;
  cursor: pointer;
`;

const SearchBarFlex = styled(Flex)`
  width: 100%;
`;
function SearchBar() {
  return (
    <SearchBarFlex as="form">
      <LandingInput placeholder="Enter a movie name" height={HEIGHT} />

      <IconWrapper as="button">
        <StyledSearchIcon />
      </IconWrapper>
    </SearchBarFlex>
  );
}

export default withTheme(SearchBar);
