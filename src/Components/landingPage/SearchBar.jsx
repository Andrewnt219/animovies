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
`;

const HEIGHT = '15vw';

const StyledSearchIcon = styled(MdSearch)`
  color: ${(p) => p.theme.white};
  background: ${(p) => p.theme.primary};
  width: ${HEIGHT};
  height: ${HEIGHT};
  font-size: inherit;
`;

function SearchBar(props) {
  return (
    <StyledSearchBar>
      <Input height={HEIGHT} />
      <StyledSearchIcon />
    </StyledSearchBar>
  );
}

export default withTheme(SearchBar);
