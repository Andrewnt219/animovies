import SearchBar from 'Components/landingPage/SearchBar';
import styled from 'styled-components/macro';
import PropTypes from 'prop-types';

export const AppBarSearchBar = styled(SearchBar)`
  position: fixed;
  top: ${(p) => p.offsetTop ?? 0};
  left: ${(p) => p.offsetLeft ?? 0};
  z-index: ${(p) => p.zIndex ?? p.theme.zIndex.high};
  width: 100vw;

  * {
    border-radius: 0;
  }
`;

AppBarSearchBar.propTypes = {
  offsetTop: PropTypes.string,
  offsetLeft: PropTypes.string,
  zIndex: PropTypes.number,
};
