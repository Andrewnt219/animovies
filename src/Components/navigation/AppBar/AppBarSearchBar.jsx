/* --------------------------------- IMPORT --------------------------------- */
import SearchBar from 'Components/landingPage/SearchBar';
import styled from 'styled-components/macro';
import PropTypes from 'prop-types';

/* -------------------------------- COMPONENT ------------------------------- */
// NOTE position the SearchBar for AppBar
export const AppBarSearchBar = styled(SearchBar)`
  top: ${(p) => p.offsetTop ?? 0};
  left: ${(p) => p.offsetLeft ?? 0};

  position: fixed;
  z-index: ${(p) => p.zIndex ?? p.theme.zIndex.med};

  width: 100vw;

  * {
    border-radius: 0;
  }
`;

/* -------------------------------- VALIDATE -------------------------------- */
AppBarSearchBar.propTypes = {
  offsetTop: PropTypes.string,
  offsetLeft: PropTypes.string,
  zIndex: PropTypes.number,
};
