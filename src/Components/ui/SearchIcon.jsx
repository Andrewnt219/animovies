import { MdSearch } from 'react-icons/md';
import styled from 'styled-components/macro';
import React from 'react';

function SearchIcon({ setIsSearchOpen }) {
  return <StyledMdSearch onClick={() => setIsSearchOpen((prev) => !prev)} />;
}

export default SearchIcon;

const StyledMdSearch = styled(MdSearch)`
  color: ${(p) => p.theme.white};
  width: ${(p) => p.width ?? 'min(12vw, 5rem)'};
  height: 100%;
  cursor: pointer;
`;
