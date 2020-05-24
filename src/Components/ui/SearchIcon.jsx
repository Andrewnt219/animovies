/* --------------------------------- IMPORT --------------------------------- */
import PropTypes from 'prop-types';
import styled from 'styled-components/macro';
import React from 'react';
import { MdSearch } from 'react-icons/md';

/* -------------------------------- COMPONENT ------------------------------- */
// NOTE render the SearchIcon
function SearchIcon({ setIsSearchOpen }) {
  return <StyledMdSearch onClick={() => setIsSearchOpen((prev) => !prev)} />;
}

/* -------------------------------- VALIDATE -------------------------------- */
SearchIcon.propTypes = {
  setIsSearchOpen: PropTypes.func,
};

/* --------------------------------- STYLING -------------------------------- */
const StyledMdSearch = styled(MdSearch)`
  color: ${(p) => p.theme.white};
  width: ${(p) => p.width ?? 'min(12vw, 5rem)'};
  height: 100%;
  cursor: pointer;
`;

export default SearchIcon;
